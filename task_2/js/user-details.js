const url = new URL(window.location.href);
const userId = url.searchParams.get("id");

const userDetails = document.getElementById("user-details");
const postsContainer = document.getElementById("posts");
const loadPostsBtn = document.getElementById("load-posts");


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        function renderObject(obj, index = 0) {
            let text = '';
            const spacing = '  '.repeat(index);

            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    text += `${spacing}--- ${key} ---\n`;
                    text += renderObject(obj[key], index + 1);
                } else {
                    text += `${spacing}${key}: ${obj[key]}\n`;
                }
            }

            return text;
        }

        userInfo.innerText = renderObject(user);
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

