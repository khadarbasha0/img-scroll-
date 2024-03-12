
const searchForm = document.getElementById("search-form");
const searchbox = document.getElementById("seach-input");
const searchresult = document.getElementById("search-result");
const searcbtn = document.getElementById("show-more-btn");
const accesKey = 'LbBMukDYYFnrbFDvF0PULC7tucc51bm9PzwLBOUbi_E';

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchbox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url);
    const data  = await response.json();

    if(page === 1){
        searchresult.innerHTML ="";

    }

    const result = data.results;
    
    result.map((result)=>{

        const image = document.createElement('img');
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchresult.appendChild(imageLink);

    });

    searcbtn.style.display = "block";

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
});

searcbtn.addEventListener("click",()=>{

    page++;
    searchImage();

})

