
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function handelSubmit() {
    const name = document.getElementById('custname').value;
    const email = document.getElementById('custemail').value;
    const message = document.getElementById('custcomment').value;

    if (name.length == 0 || email.length == 0 || message.length == 0) {
        alert("Plaese Provide complete Details!! :|")
        document.getElementById("custname").value = "";
        document.getElementById("custemail").value = "";
        document.getElementById("custcomment").value = "";
    }

    else {

        const params = {
            name,
            email,
            message
        }

        const templateID = "template_8ujvmfg";
        const serviceID = "service_ekvlkmd";

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("custname").value = "";
                document.getElementById("custemail").value = "";
                document.getElementById("custcomment").value = "";
                alert("Message Send Successful:), Will contact super soon")
            })
            .catch((err) => {
                alert("Error, Try Again Later!!")
            })
    }
}