import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const app = express();
const DB_URL =
  'mongodb+srv://user:user@cluster0.t0yye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use('/api', router);

app.post('/', async (req, res) => {
  try {
    const {author, title, contents} = req.body;
    console.log(author, title, contents);
    const post = await Post.create({author, title, contents});
    res.status(200).json('Server is working');
  } catch (e) {
    res.status(500).json(e);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(3000, () => {
      console.log('Server is running on 3000 port');
    });
  } catch (e) {

    console.log(e);
  }
}

startApp();
