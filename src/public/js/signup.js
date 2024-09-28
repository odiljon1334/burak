console.log("Signup frontend javascript file");
$(function () {});

function validationSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if (
        memberNick === "" || 
        memberPhone === "" || 
        memberPassword === "" || 
        confirmPassword === ""
    ) {
        alert("Please insert all requires inputs!");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Password differs, please check!");
        return false;
    }
}