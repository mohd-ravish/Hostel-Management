const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const logoutBtn = document.querySelector('.logout');

const dashboardSelector = document.querySelector("#dashboard");
const profileSelector = document.querySelector("#profile");
const messageSelector = document.querySelector("#message");
const settingsSelector = document.querySelector("#settings");


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';

})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

logoutBtn.addEventListener("click", function () {
    logoutBtn.href = "index.html";
});

dashboardSelector.addEventListener('click', function () {
    dashboardSelector.classList.add("active");
    profileSelector.classList.remove("active");
    messageSelector.classList.remove("active");
    settingsSelector.classList.remove("active");
    document.querySelector("main").style.display = 'block';
});
profileSelector.addEventListener('click', function () {
    profileSelector.classList.add("active");
    dashboardSelector.classList.remove("active");
    messageSelector.classList.remove("active");
    settingsSelector.classList.remove("active");
    document.querySelector("main").style.display = 'none';
});

messageSelector.addEventListener('click', function () {
    messageSelector.classList.add("active");
    profileSelector.classList.remove("active");
    dashboardSelector.classList.remove("active");
    settingsSelector.classList.remove("active");
});

settingsSelector.addEventListener('click', function () {
    settingsSelector.classList.add("active");
    messageSelector.classList.remove("active");
    profileSelector.classList.remove("active");
    dashboardSelector.classList.remove("active");

});

// document.querySelectorAll("#dashboard").addEventListener("click", function(){
//     document.querySelectorAll("#dashboard").setAttribute("class","active");
// })

const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();
const h = n.getHours();
const mn = n.getMinutes();
document.getElementById("date").innerHTML = d + " / " + m + " / " + y + "  -  " + h + " : " + mn;

