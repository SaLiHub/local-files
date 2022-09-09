formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://api.github.com/users/SaLiHub', {
        method: 'POST',
        body: new FormData(formElem),
    });

    let result = await response.json();

    alert(result.message);
};
