// // var img = require("../../img.json");
var loadFile = function(event){
        console.log("in script");
        console.log(event.target.files);
        var url = URL.createObjectURL(event.target.files[0]);
        console.log(url);
        localStorage.setItem("imgData", url);
}

