'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	var email,pass;
    $("#submit").click(function(){
        email=$("#email").val();
        pass=$("#password").val();
        /*
        * Perform some validation here.
        */
        $.post("/",{email:email,pass:pass},function(data){
            if(data==='done') {
                window.location.href="/home";
            } else {
				window.location.href="/";
				alert("Your provided information is incorrect!!!");
			}
        });
    });
})
