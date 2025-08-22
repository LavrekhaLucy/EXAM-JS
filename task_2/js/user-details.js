const url = new URL(window.location.href);
const userId = url.searchParams.get("id");

const userDetails = document.getElementById("user-details");
const postsContainer = document.getElementById("posts");
const loadPostsBtn = document.getElementById("load-posts");


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        userInfo.innerText = `
        ID: ${user.id}
        Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}
        Phone: ${user.phone}
        Website: ${user.website}
        
        --- Address ---
        Street: ${user.address.street}
        Suite: ${user.address.suite}
        City: ${user.address.city}
        Zipcode: ${user.address.zipcode}
        Geo: lat=${user.address.geo.lat}, lng=${user.address.geo.lng}
        
        --- Company ---
        Name: ${user.company.name}
        CatchPhrase: ${user.company.catchPhrase}
        BS: ${user.company.bs}
                `;

        userDetails.appendChild(userInfo);
    });


loadPostsBtn.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            postsContainer.innerText = "";
            for (const post of posts) {
                let postDiv = document.createElement("div");
                postDiv.className = "post-card";

                let title = document.createElement("h3");
                title.innerText = post.title;

                let link = document.createElement("a");
                link.href = `post-details.html?id=${post.id}`;
                link.innerText = "Post details";

                postDiv.append(title, link);
                postsContainer.appendChild(postDiv);
            }
        });
});

