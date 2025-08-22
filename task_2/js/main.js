const usersContainer = document.getElementsByClassName("users-container")[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {

        for (const user of users) {

            let cartDiv = document.createElement('div');
            cartDiv.className = ('user-card');

            let p = document.createElement('p');
            p.innerText = user.id;

            let h3 = document.createElement('h3');
            h3.innerText = user.name;

            let link = document.createElement("a");
            link.href = `user-details.html?id=${user.id}`;
            link.innerText = "User details";
            link.className = "user-link";

            cartDiv.append(p, h3, link);
            usersContainer.appendChild(cartDiv);

        }

    })





