import Router from 'express'
import Post from 'Post';

const router = new Router()

router.post('/posts', async (req, res) => {
  try {
    const {author, title, contents} = req.body;
    console.log(author, title, contents);
    const post = await Post.create({author, title, contents});
    res.status(200).json('Server is working');
  } catch (e) {
    res.status(500).json(e);
  }
})
router.get('/posts')
router.get('/posts:id')
router.put('/posts')
router.delete('/posts:id')

export default router;
