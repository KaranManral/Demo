document.body.onload = () => {
    let slide = document.getElementById("sliderBtn");
    slide.onchange = () => {
        if (slide.checked) {
            document.querySelector(".img-container .img-1").style.opacity = 1;
            document.querySelector(".text-container .text-1").style.opacity = 1;
            document.querySelector(".img-container .img-2").style.opacity = 0;
            document.querySelector(".text-container .text-2").style.opacity = 0;
        }
        else {
            document.querySelector(".img-container .img-2").style.opacity = 1;
            document.querySelector(".text-container .text-2").style.opacity = 1;
            document.querySelector(".img-container .img-1").style.opacity = 0;
            document.querySelector(".text-container .text-1").style.opacity = 0;
        }
    }
};