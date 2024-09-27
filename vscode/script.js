function toggleMode(){
const html = document.documentElement

if(html.classList.contains('light')) {
    html.classList.remove('light')
} else{
    html.classList.add('light')
}

const img = document.querySelector('#profile img')
if(html.classList.contains('light')) {
    img.setAttribute('src', './pd1/avatar-light.png')

} else {
    img.setAttribute('src', './pd1/avatar.png')
}
}