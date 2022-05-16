$(document).ready(function(){
    $("#btn-login").click(function(){
        let username = $("#email").val().trim();
        let password = $("#pwd").val().trim();

        console.log(username)

        if( username != "" && password != "" ){
            $.ajax({
                url:'https://localhost:5001/Alumno/Login',
                type:'post',
                data:JSON.stringify({email:username,password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    
                    window.location = "welcome.html";
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        }
    });
});