$(function(){
    $(".mobile-nav-icon").eq(0).click(function(){
        $(".mobile-nav-dropdown").eq(0).addClass("open-mobile-nav-dropdown");
    });

    $(".close-mobile-nav-icon").eq(0).click(function(){
        $(".mobile-nav-dropdown").eq(0).removeClass("open-mobile-nav-dropdown");
    });

    // $(".about-form").validate({
    //     onfocusout: false,
	// 	onkeyup: false,
	// 	onclick: false,
	// 	rules: {
	// 		"name": {
	// 			required: true
    //         },
    //         "email": {
    //             required: true,
    //             email: true
    //         },
	// 		"password": {
	// 			required: true,
	// 			minlength: 8
	// 		},
	// 	},
	// 	messages: {
	// 		"name": {
	// 			required: "Bạn chưa nhập tên đăng nhập!"
	// 		},
	// 		"email": {
	// 			required: "Bạn chưa nhập email!",
	// 			email: "Email của bạn không khớp!"
	// 		},
	// 		"password": {
	// 			required: "Bạn chưa nhập mật khẩu!",
	// 			minlength: "Độ dài mật khẩu lớn hơn 8!"
	// 		}
    //     }
    // });

    $(".btn-submit").click(function(event){
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        console.log(name);
        if (name == undefined){
            $("#name").after(<div class="error">Bạn chưa nhập tên đăng nhập!</div> );
            return false;
        }
        return false;
        console.log(name);
        console.log(password);
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/api/login",
            data: {
                username: name,
                password: password
            },
            dataType: "json",
            success: function(da){
                alert(da.message);
            },
            error: function(da){
                console.log(da);
                alert(da.responseJSON.error)
            }
        })
    })
    

    var slideIndex = 1;
    $(".next").click(function(){
        var i;
        slideIndex += 1;
        if (slideIndex > 2) {slideIndex = 1};
        for (i = 0; i < 2; i++){
            $(".slide-item").eq(i).css("display", "none");
        }
        $(".slide-item").eq(slideIndex-1).css("display", "block");
    })
    $(".prev").click(function(){
        var i;
        slideIndex -= 1;  
        if (slideIndex < 1) {slideIndex = 2};
        for (i = 0; i < 2; i++){
            $(".slide-item").eq(i).css("display", "none");
        }
        $(".slide-item").eq(slideIndex-1).css("display", "block");
    })
});