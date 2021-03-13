'use strict';
var loadFile = function(event){
        console.log("in script");
        console.log(event.target.files);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          // convert file to base64 String
          const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
          // store file
          localStorage.setItem('imgData', base64String);
          // display image
         // document.body.style.background = `url(data:image/png;base64,${base64String})`;
        };
        reader.readAsDataURL(file);
        //localStorage.setItem("imgData", url);
}

$(document).ready(function() {
        console.log("HII");
        $(document).on("keyup", function(e){
                e.preventDefault();
                console.log($("#min_value").val());
                if (parseInt($("#min_value").val()) > parseInt($("#max_value").val())) {
                        console.log(parseInt($("#min_value").val()));
                        document.getElementById('msg').innerHTML = "Min cannot be larger than max.";
                        document.getElementById("msg").style.color = '#d00'
                }else{
                        if(document.getElementById('msg') != null){
                                document.getElementById('msg').innerHTML = "";
                        }
                        
                }        
        })

	
})



