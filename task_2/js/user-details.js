    let url = new URL(`https://jsonplaceholder.typicode.com/users`);
       console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(user => {
            console.log(user);
        });

