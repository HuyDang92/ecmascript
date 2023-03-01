var postAPI = "https://jsonplaceholder.typicode.com/posts";
fetch(postAPI)
    .then(function (respone) {
        return respone.json();
    })
    .then(function (posts) {
        var html = posts.map(function (posts) {
            return `<li>
            <h3>${posts.title}</h3>
            <p>${posts.body}</p>
            </li>`;
        });
        var posts = (document.getElementById("posts").innerHTML = html);
    })
    .catch(function (err) {
        console.log("Có Lỗi");
    });
