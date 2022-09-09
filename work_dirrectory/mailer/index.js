console.log('luck');
const form = document.queryElement('#formElem');

form.addEventListener('submit', submitHandler);

async function submitHandler(e) {
    e.preventDefault();
    let response = await fetch('server.php', {
        method: 'POST',
        body: new FormData(form),
    });
    let result = await response.json();
    alert(result.message);
    console.log('luck');
}
