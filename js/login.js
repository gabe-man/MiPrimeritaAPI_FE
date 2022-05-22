$(document).ready(function(){
    $("#btn-login").click(function(){
        let Name = $("#user").val().trim();
        let Password = $("#pwd").val().trim();

        console.log(Name)

        if( Name != "" && Password != "" ){
            $.ajax({
                url:'https://localhost:44367/User/Login',
                type:'post',
                data:JSON.stringify({name:Name,password:Password}),
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

    $("#btn-register").click(function(){
        window.location = "register.html";
    })
});