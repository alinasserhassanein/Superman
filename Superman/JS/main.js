// StartScroll
let scrollUp = document.querySelector("#ScrollUp");

window.addEventListener("scroll", function (e) {
    if (this.window.pageYOffset > 300) {
        if (!scrollUp.classList.contains("scrollActive")) {
            scrollUp.classList.remove("scrollNotActive");
            scrollUp.classList.add("scrollActive");
            scrollUp.style.display = "block"
        }
    } else {
        if (scrollUp.classList.contains("scrollActive")) {
            scrollUp.classList.remove("scrollActive");
            scrollUp.classList.add("scrollNotActive");
            this.setTimeout(function() {
                scrollUp.style.display = "none"
            }, 250);
        }
    }
});

scrollUp.addEventListener("click", backToTop => {
    window.scrollTo(0, 0)
});
// EndScroll
// StartCountDown
let countDownData = new Date("June 1, 1938 00:00:00").getTime();
let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownData - dateNow;

    let years = Math.floor(-dateDiff / 1000 / 60 / 60 / 24 / 365)
    let days = Math.floor(-dateDiff % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24))
    let hours = Math.floor(-dateDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60)
    let minutes = Math.floor(-dateDiff % (1000 * 60 * 60) / 1000 / 60)
    let seconds = Math.floor(-dateDiff % (1000 * 60) / 1000)

    document.querySelector(".created .years").innerHTML = years;
    document.querySelector(".created .days").innerHTML = days;
    document.querySelector(".created .hours").innerHTML = hours;
    document.querySelector(".created .minutes").innerHTML = minutes;
    document.querySelector(".created .seconds").innerHTML = seconds;
},1000)
// EndCountDown
// StartStats
let follow = 162197371;
let followersNum = setInterval(() => {
    follow++
    document.querySelector(".about .follow .number").innerHTML = follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g ,",");
}, 300)

let view = 649348734;
let viewsNum = setInterval(() => {
    view++
    document.querySelector(".about .view .number").innerHTML = view.toString().replace(/\B(?=(\d{3})+(?!\d))/g ,",");
}, 100)
// EndStats

// StartLogin&Signup
let signin = document.querySelector(".sign-links li:first-child a");
let signup = document.querySelector(".sign-links li:last-child a");

signin.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/Login/");
}

signup.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/Register/");
}
// EndLogin&Signup