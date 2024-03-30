var popupOverlay=document.querySelector(".popup-overlay")
var popupBox=document.querySelector(".popup-box")
var tickets=document.querySelector("#ticket")
var closeBtn=document.getElementById("btn")

tickets.addEventListener("click",function(){
    popupOverlay.style.display="block";
    popupBox.style.display="block";
})
closeBtn.addEventListener("click",()=>{
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

let sections = document.querySelectorAll('section')
let ulLinks = document.querySelectorAll('ul li a')

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            ulLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('ul li a[href=' + id + ']').classList.add('active');
            })
        }
    })
}