$(".read-more").click(function(){
    var panel = $(".more-info", $(this).closest(".card"));

    if(panel.length){
        if(panel.hasClass("hidden")){
            panel.slideDown(function(){
                $(this).removeClass("hidden");
            });
            $("span.text", this).text("Less Information");
            $("svg", this).addClass("rotate");
        } else {
            panel.slideUp(function(){
                $(this).addClass("hidden");
            });
            $("span.text", this).text("More Information");
            $("svg", this).removeClass("rotate");
        }
    }
});

(function($, window) {
    var adjustAnchor = function() {

        var $anchor = $(':target'),
                fixedElementHeight = 52;

        if ($anchor.length > 0) {

            window.scrollTo(0, $anchor.offset().top - fixedElementHeight);

        }

    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

})(jQuery, window);

var $toggle = $('.navbar-burger');

$toggle.click(function() {
    var target = $(this).data("target");
    var $el = $(this);

    $el.toggleClass('is-active');
    $("#" + target, $el.closest(".navbar")).toggleClass('is-active');
});


$("#cv-request").click(function(){
    Swal.fire({
        title: 'Contact Details',
        text: 'I would like a CV to be emailed to:',
        footer: '<small class="is-size-7 has-text-centered text-center">Your email address is not stored and this request is disposed of after a CV has been forwarded. This is not an automatic process.</small>',
        input: 'email',
        inputPlaceholder: 'Enter your email address',
        confirmButtonText: 'Send CV Request',
        showCancelButton: true,
        buttonsStyling: false,
        customClass: {
            cancelButton: 'button',
            confirmButton: 'button mr-15 is-primary',
            input: 'input is-primary is-size-6'
        },
        preConfirm: function(email) {
            var data = new FormData();
            data.append("email", email);
    
            return fetch("cv-request.php", {
                method : "POST",
                body : data
            }).then(function(response) {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
            })
            .catch(function(error) {
                Swal.showValidationMessage(
                    'Request failed:' + error
                )
            })
          },
          allowOutsideClick: function(){
            return !Swal.isLoading();
          } 
    })
});