'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    $("#submit").click(function () {
        var email = $("#email").val();
        var pass = $("#password").val();
        console.log(email)
        console.log(pass)
        /*
        * Perform some validation here.
        */
        $.post("/authenticate", {
            email: email, pass: pass
        }, function (data) {
            if (data === 'done') {
                window.location.href = "/home";
            } else {
                window.location.href = "/";
                alert("Your provided information is incorrect!!!");
            }
        });
    });
})