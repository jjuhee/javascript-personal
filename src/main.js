//import { getMovies } from "./src/homework1.js";

//1. 영화 가져오기
getMovies();

// 페이지 들어갔을 때, (새로고침 시) 인풋창에 포커스
const searchInput = document.querySelector("#inputBox");
searchInput.focus();

//2. 영화 검색하기 (리스너 달아주기)
document.querySelector("#searchBtn").addEventListener("click", filterMovie);
