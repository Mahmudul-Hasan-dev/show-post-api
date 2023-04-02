function loadPost() {
    // console.log('loaded')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        //send the data to another function
        .then(data => displayall(data))
}
//simply call the function if there is not click event by button
//we will use this when data have to reload autometically
loadPost()


function displayall(data) {
    const postcontainer = document.getElementById('post-container')
    for (const post of data) {
        // console.log(post);
        const postdiv = document.createElement('div');
        postdiv.classList = 'post'
        postdiv.innerHTML = `
        <h4>USER-${post.userId}</h4>
        <h5>USER-Title-${post.title}</h5>
        <p>USER-DESCRIPTION-${post.body}</p>`;
        postcontainer.appendChild(postdiv);
    }
}

//get the element where you want to add the element
// create what you want to add
//add innerText or innerHtml
//appendchild