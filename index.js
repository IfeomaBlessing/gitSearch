let inputBox = document.getElementById("inputBox");
let inputBtn = document.getElementById("btn");
let searchIcon = document.getElementById("searchIcon");
let gitAnswer = document.querySelector(".gitAnswer");

const api_url ="https://api.github.com/users/${username}"

async function getGitProfile(url){

const response = await fetch (url)
let gitData = await response.json();

console.log(gitData)
}

getGitProfile(api_url);