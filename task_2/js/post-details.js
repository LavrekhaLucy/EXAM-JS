const url = new URL(window.location.href);
const postId = url.searchParams.get("id");

const postsDetails = document.getElementById("post-details");
const commentsContainer = document.getElementById("comments");
loadCommentsBtn = document.getElementById("load-comments");


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {

        let postDiv = document.createElement("div");
        postDiv.className = "post-div";
        postDiv.innerText = `
                   Id:${post.id}
                   Title:${post.title}
                   Body:${post.body}
                `;

        postsDetails.appendChild(postDiv);

    })

loadCommentsBtn.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(comments => {
            commentsContainer.innerText = "";

            for (const comment of comments) {

                let commentDiv = document.createElement("div");
                commentDiv.className = "comment-card";
                commentDiv.innerText = `
                    PostId: ${postId}
                    Id: ${postId}
                    Name:${comment.name}
                    Body:${comment.body}
                    Email:${comment.email}
                    `
                commentsContainer.appendChild(commentDiv);

            }

        });
});

