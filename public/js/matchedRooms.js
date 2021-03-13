'use strict';
document.addEventListener("DOMContentLoaded", ()=>{
    var dataImages = localStorage.getItem('imgData');
    if(dataImages){
        //console.log(dataImages);
        var imgArr = JSON.parse(dataImages);
        //console.log(imgArr.length);
        var images = document.querySelectorAll('.id1');
        var roomPics = Array.prototype.slice.call(images); 
        for(var i = 0; i < roomPics.length; i++){
            roomPics[i].setAttribute("src", "data:image/png;base64," + imgArr[i]);
        }
    }
    
    

    // if(dataImage){
    //     document.querySelector("#id1").setAttribute("src", "data:image/png;base64," + dataImage);
    // }else if(dataImage == '' || dataImage == null){
    //     document.querySelector("#id1").setAttribute("src", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/65638324.jpg?k=1e6c5650d7e45f4ecab961bca77fdaf269e3acaf51e4313b94e3cff03d8b10ed&o=");
    // }
    
});
