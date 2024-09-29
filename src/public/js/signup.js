console.log("Signup frontend javascript file");
$(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;

    fileTarget.on("change", function () {
        if(window.FileReader) {
            const uploadFile = $(this)[0].files[0];
            const fileType = uploadFile["type"];
            const validImageType = ["image/jpg", "image/jpeg", "image/png"];

            if (!validImageType.includes(fileType)) {
                alert('Please insert only jpg, jpeg, png!');
            } else {
                if(uploadFile) {
                    $(".upload-img-frame")
                    .attr("src", URL.createObjectURL(uploadFile))
                    .addClass("success");

                }
                filename = $(this)[0].files[0].name;
            }
            $(this).siblings(".upload-name").val(filename);
        }
    });
});

function validationSignupForm() {
    const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

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

    const memberImage = $(".member-image").get(0).files[0] 
    ? $(".member-image").get(0).files[0].name : null;
    if (!memberImage) {
        alert('Please insert reastaurant image!');
        return false;
    }
}