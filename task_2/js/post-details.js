const url = new URL(window.location.href);
const postId = url.searchParams.get("id");

const postsDetails = document.getElementById("post-details");
const commentsContainer = document.getElementById("comments");
loadCommentsBtn = document.getElementById("load-comments");


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post-div";

        for (const key in post) {
            postDiv.innerText += `${key}: ${post[key]} \n`;
        }

        postsDetails.appendChild(postDiv);
    });


loadCommentsBtn.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(comments => {

            for (const comment of comments) {

                let commentDiv = document.createElement("div");
                commentDiv.className = "comment-card";

                for (const key in comment) {
                    commentDiv.innerText += `${key}: ${comment[key]}\n`;
                }
                commentsContainer.appendChild(commentDiv);
            }

        });
});

