const postsPerPage = 5;
let currentPage = 1;
let postsData = [];

async function fetchData() {
try{
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
postsData = await response.json();
displayPosts();
displayPaginationControls();

} catch(error){
    console.error('Error:', error);
    document.getElementById('posts').innerHTML = `<h3 style = "color:red;">Sorry, something went wrong!!</h3>`
    
}


}
function displayPosts() {



    const postDiv = document.getElementById('posts');
    postDiv.innerHTML =``;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = postsData.slice(startIndex, endIndex);
    
    

        currentPosts.forEach(post => {

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
     <h2>${post.title}</h2>
     <p>${post.body}</p>

     `;
    postDiv.appendChild(postElement);
});

}

function displayPaginationControls() {
    const paginationDiv = document.getElementById('pagination-controls');
    paginationDiv.innerHTML = `` ;

    const totalPages = Math.ceil(postsData.length / postsPerPage);
    const prevButton = document.createElement('button');
   
    prevButton.innerText= 'Previous';
    prevButton.disabled = currentPage === 1 ;
    
    prevButton.addEventListener('click', () => {
        currentPage --;
        displayPosts();
        displayPaginationControls();
    }) 

const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.disabled = currentPage === totalPages;
nextButton.addEventListener('click', () =>{
    currentPage ++;
    displayPosts();
    displayPaginationControls();
})

const pageIndicator = document.createElement('span');
pageIndicator.innerText = `page ${currentPage} of ${totalPages}`;


paginationDiv.appendChild(prevButton);

paginationDiv.appendChild(nextButton);
paginationDiv.appendChild(pageIndicator);
}

fetchData();