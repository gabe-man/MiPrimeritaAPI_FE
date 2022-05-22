$(document).ready(function(){
    $("#btn-register").click(function(){
        let Name = $("#user").val().trim();
        let Email = $("#email").val().trim();
        let Password = $("#pwd").val().trim();
        let BirthDate = $("#birthdate").val().trim();

        console.log(BirthDate);

        console.log(Name)

        if( Name != "" && Password != "" && Email != ""){
            $.ajax({
                url:'https://localhost:44367/User/Register',
                type:'post',
                data:JSON.stringify({name:Name,email:Email,password:Password,birthdate:BirthDate}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    window.location = "index.html";
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        }
    });
});