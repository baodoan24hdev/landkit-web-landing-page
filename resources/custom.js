function openMobileNavDropdown(){
    var mobileNavDropdown = document.getElementById("mobile-nav-dropdown");
    mobileNavDropdown.style.opacity = '1';
    mobileNavDropdown.style.pointerEvents = "auto";
    mobileNavDropdown.style.overflowY = "auto";
}

function closeMobileNavDropdown(){
    var mobileNavDropdown = document.getElementById("mobile-nav-dropdown");
    mobileNavDropdown.style.opacity = '0';
    mobileNavDropdown.style.pointerEvents = "none";
    mobileNavDropdown.style.overflowY = "none";
}

/*function checkValidate(){
    var email = document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailformat)){
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}*/

function invalidName(nameBox){ 
    if (nameBox.value === ''){ 
        nameBox.setCustomValidity('Bạn chưa nhập tên đăng nhập!'); 
    }
    else{ 
        nameBox.setCustomValidity('');
    } 
    return true; 
} 

function invalidEmail(emailBox) { 
    if (emailBox.value === ''){ 
        emailBox.setCustomValidity('Bạn chưa nhập email!'); 
    } 
    else if (emailBox.validity.typeMismatch){ 
        emailBox.setCustomValidity('Email của bạn không khớp!'); 
    } 
    else{ 
        emailBox.setCustomValidity('');
    } 
    return true; 
}

function invalidPassword(passwordBox){ 
    if (passwordBox.value === ''){ 
        passwordBox.setCustomValidity('Bạn chưa nhập mật khẩu!'); 
    } 
    else if (passwordBox.value.length < 8){ 
        passwordBox.setCustomValidity('Độ dài mật khẩu lớn hơn 8!'); 
    } 
    else{ 
        passwordBox.setCustomValidity('');
    } 
    return true; 
}

function handleSubmit(){
    console.log("Hello");
    console.log("Name: " + document.getElementById("name").value);
    console.log("Email: " + document.getElementById("email").value);
    console.log("Password: " + document.getElementById("password").value);
}

var slideIndex = 1;

function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slide-item");
  if (n > slides.length) {slideIndex = 1};    
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}