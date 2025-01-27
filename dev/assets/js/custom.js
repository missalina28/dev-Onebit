$(document).ready(function(){
    $('[type="tel"]').mask('+38(000)-00-00-000');
});
$('#demo').hideShowPassword({
    innerToggle: true
});
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});


const time=3
let greeting;

if (time<4) {
    greeting="Good night!"
}
else if (time<12) {
    greeting="Good morning!"
}
else if (time<17) {
    greeting="Good afternoon!"
}
else if (time<22) {
    greeting="Good evening!"
}
else {
    greeting="Hi!"
}

console.log(greeting)