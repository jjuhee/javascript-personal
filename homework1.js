// //homework.js

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU5N2QyZGE0NzI1NTcyODJmNjA4NGE4MDIzYTRiZSIsInN1YiI6IjY1MzRkN2I3NDJkODM3MDEyYzc2YjM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nlgw0kibOhrWpDdAK7wDBxrSGBN1-oywRoHgcq-t5_c'
    }
};

let image_base_url="";
let image_size="";
const id = [];
const title = [];

fetch('https://api.themoviedb.org/3/configuration', options)
    .then(response => response.json())
    .then(response => {
        image_base_url = response['images']['base_url'];
        image_size = response['images']['poster_sizes'][5];
    })
    .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        results = response['results'];
        console.log(results);
        results.forEach((results) => {
            let poster_path = image_base_url + image_size +results['poster_path'];
            let overview = results['overview'];
            let vote_average = results['vote_average'];
            title.push(results['title']);
            id.push(results['id']);
            
            let temp_html =`
                    <img src="${poster_path}" class="card-img" alt="...">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-overview">${overview}</p>
                    <h4>Rating : ${vote_average}</h>`

            const div = document.createElement('div');
            div.innerHTML = temp_html;
            div.className='movie-card';
            div.id = 'movieBtn';
            div.onclick="movieClicked();";
            document.querySelector('section').appendChild(div);
        });
        
        
    })
    .catch(err => console.error(err));

// element.addEventListener((type, listener)
document.querySelector("#searchBtn").addEventListener("click", ()=> {
    let txt = document.getElementById("inputBox").value;
    txt = txt.toUpperCase();
    title.filter()
  //  if (txt === title.toUpperCase())
    
    console.log("jhee",txt);

});

 let movieCards = document.querySelectorAll("#movie-card");
// console.log(movieCards);

movieCards.forEach((target) => target.addEventListener("click", (target) => {
  //  let idStr ="33";
   // alert(`id : ${idStr}`);
    movieClicked(target);
})
);


function movieClicked(target) {
    console.log("jhee1424",target);
     let idStr ="33";
     alert(`id : `);
 };

// function name () => {
//     let idStr ="33";
//     alert(`id : ${idStr}`);
// }; 

