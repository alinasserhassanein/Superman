let user = document.querySelector("[name='username']");
let pass = document.querySelector("[name='password']");

//Local Storage

user.onblur = function() {
    window.sessionStorage.setItem("inputOne", user.value)
}

pass.onblur = function() {
    window.sessionStorage.setItem("inputTwo", pass.value)
}

if (window.sessionStorage.getItem("inputOne")) {
    user.value = window.sessionStorage.getItem("inputOne");
}

if (window.sessionStorage.getItem("inputTwo")) {
    pass.value = window.sessionStorage.getItem("inputTwo");
}
//check input
document.querySelector(".log").onclick = function(e) {
    if (user.value === "" && pass.value === "") {
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
            title: 'Please Check Email, Password'
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
// forget password
let forgetPass = document.querySelector(".resetPass")

forgetPass.onclick = function(e) {
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
        title: 'Not Available'
    })
}

// Back To Home

let home = document.querySelector(".home");

home.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/");
}

// Signup

let signup = document.querySelector(".login .signup a");

signup.onclick = function() {
    location.replace("https://alinasserhassanein.github.io/Superman/Register/");
}