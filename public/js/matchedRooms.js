'use strict';
document.addEventListener("DOMContentLoaded", ()=>{
    var dataImage = localStorage.getItem('imgData');
    console.log(dataImage);
    if(dataImage){
        document.querySelector("#id1").setAttribute("src", "data:image/png;base64," + dataImage);
    }
    //roomImg.src = "data:image/png;base64," + dataImage;
});
