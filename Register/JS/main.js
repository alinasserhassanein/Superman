let fullname = document.querySelector("[name='fullname']");
let user = document.querySelector("[name='username']");
let email = document.querySelector("[name='email']");
let pass = document.querySelector("[name='password']");

//Local Storage

fullname.onblur = function() {
    window.sessionStorage.setItem("fullname", fullname.value)
}

user.onblur = function() {
    window.sessionStorage.setItem("username", user.value)
}

email.onblur = function() {
    window.sessionStorage.setItem("email", email.value)
}

pass.onblur = function() {
    window.sessionStorage.setItem("password", pass.value)
}

if (window.sessionStorage.getItem("fullname")) {
    fullname.value = window.sessionStorage.getItem("fullname");
}

if (window.sessionStorage.getItem("username")) {
    user.value = window.sessionStorage.getItem("username");
}

if (window.sessionStorage.getItem("email")) {
    email.value = window.sessionStorage.getItem("email");
}

if (window.sessionStorage.getItem("password")) {
    pass.value = window.sessionStorage.getItem("password");
}
//check input
document.querySelector(".log").onclick = function(e) {
    if (fullname.value === "" && user.value === "" && email.value === "" && pass.value === "") {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Please Check All Requirements'
        });
    } else if (fullname.value === "") {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Please Check Fullname'
        });
    } else if (user.value === "") {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Please Check Username'
        });
    } else if (email.value === "") {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Please Check Email'
        });
    } else if (pass.value === "") {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Please Check Password'
        });
    } else if (pass.value.length < 8) {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#202020',
            color: 'white',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Password Must Be 8 Or More'
        });
    }
};

// Back To Home

let home = document.querySelector(".home");

home.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/");
}

// Signup

let signup = document.querySelector(".login .signup a");

signup.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/Login/");
}