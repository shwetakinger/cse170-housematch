'use strict';
var loadFile = function(event){
        //console.log("in script");
        //console.log(event.target.files);
        if(event.target.files.length == 0){
           var items = localStorage.getItem('imgData');
           var data = JSON.parse(items);
           data.pop();
           localStorage.setItem('imgData', JSON.stringify(data));
           document.getElementById('file-msg').innerHTML = "";
           return;
        }
        const file = event.target.files[0];
        if(file.size > 512000){
                document.getElementById('file-msg').innerHTML = "File size cannot exceed 500KB.";
                document.getElementById("file-msg").style.color = '#d00';
                document.getElementById("post_check").disabled = true;
        }else{
                if(document.getElementById('file-msg') != null){
                        document.getElementById('file-msg').innerHTML = "";
                        document.getElementById("post_check").disabled = false;
                }
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          // convert file to base64 String
          const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
          if(localStorage.getItem('imgData') == null){
               var imgs = [];
               imgs.push(base64String);
                // store file
                localStorage.setItem('imgData', JSON.stringify(imgs));
          }else{
                var images = localStorage.getItem('imgData');
                var data = JSON.parse(images);
                data.push(base64String);
                //console.log("data: ", data.length);
                localStorage.setItem('imgData', JSON.stringify(data));
          }
         
        };
        if(file){
                reader.readAsDataURL(file);
        }
        
}

$(document).ready(function() {
        $(document).on("keyup", function(e){
                e.preventDefault();
                //console.log($("#min_value").val());
                if (parseInt($("#min_value").val()) > parseInt($("#max_value").val())) {
                        console.log(parseInt($("#min_value").val()));
                        document.getElementById('msg').innerHTML = "Min cannot be larger than max.";
                        document.getElementById("msg").style.color = '#d00';
                        document.getElementById("submit_check").disabled = true;

                }else{
                        if(document.getElementById('msg') != null){
                                document.getElementById('msg').innerHTML = "";
                                document.getElementById("submit_check").disabled = false;
                        }
                        
                }        
        })

	
})



