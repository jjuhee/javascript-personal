// //homework.js

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU5N2QyZGE0NzI1NTcyODJmNjA4NGE4MDIzYTRiZSIsInN1YiI6IjY1MzRkN2I3NDJkODM3MDEyYzc2YjM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nlgw0kibOhrWpDdAK7wDBxrSGBN1-oywRoHgcq-t5_c"
  }
};

let image_base_url = "";
let image_size = "";

function getMovies() {
  fetch("https://api.themoviedb.org/3/configuration", options)
    .then((response) => response.json())
    .then((response) => {
      image_base_url = response["images"]["base_url"];
      image_size = response["images"]["poster_sizes"][5];
    })
    .catch((err) => console.error(err));

  fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
    .then((response) => response.json())
    .then((response) => {
      let results = response["results"];

      //1. forEach , 화살표 함수
      results.forEach((result) => {
        appendMovie(result);
      });
    })
    .catch((err) => console.error(err));
}

function appendMovie(result) {
  let poster_path = image_base_url + image_size + result["poster_path"];
  let overview = result["overview"];
  let vote_average = result["vote_average"];
  let title = result["title"];
  let id = result["id"];
  let temp_html = `
                    <img src="${poster_path}" class="card-img" alt="...">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-overview">${overview}</p>
                    <h4>Rating : ${vote_average}</h>`;

  const div = document.createElement("div");
  div.innerHTML = temp_html;
  div.className = "movie-card";
  div.id = id;
  div.onclick = movieClicked;
  document.querySelector("section").appendChild(div);
}

document.querySelector("#searchBtn").addEventListener("click", filterMovie);

function filterMovie() {
  let input = document.getElementById("inputBox").value.toUpperCase();
  let movieCards = document.querySelectorAll(".card-title");

  console.log(movieCards);
  for (i = 0; i < movieCards.length; i++) {
    let t = movieCards[i].innerHTML.toUpperCase();

    if (t.includes(input)) {
      console.log("찾음!", movieCards[i].parentElement.classList);
      movieCards[i].parentElement.classList.remove("hidden");
    } else {
      movieCards[i].parentElement.classList.add("hidden");
    }
  }
}

// 영화 카드 리스너를 여기서 달아주면 안불림!!!!! -> addcard 부분에서 달아주기!
// let movieCards = document.querySelectorAll(".movie-card");
// movieCards.forEach((target) => target.addEventListener("click", (target) => {
//      movieClicked(target);
//  })
//  );

function movieClicked() {
  alert(`id : ${this.id}`);
}
