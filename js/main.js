(function($, window) {
    // Adds the navbar height to the scroll position to give cleaner hero views
    let adjustAnchor = function() {
        let $anchor = $(':target'),
                fixedElementHeight = 52;

        if ($anchor.length > 0) 
        {
            let scrollPosition = $anchor.offset().top - fixedElementHeight;

            window.scrollTo(0, scrollPosition);
        }

    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

    // Stop default behaviour from removing navbar height from scroll position
    $("a[href^='#']").click(function(e){
        let $el = $(this);
        let urlHash = location.hash;
        let buttonHash = $el.prop("hash");

        if(buttonHash.toLowerCase() == urlHash.toLowerCase()){
            e.preventDefault();
        }
    });

    let $toggle = $('.navbar-burger');

    $toggle.click(function() {
        let target = $(this).data("target");
        let $el = $(this);
        let closestNavbar = $el.closest(".navbar");

        $el.toggleClass('is-active');
        $("#" + target, closestNavbar).toggleClass('is-active');
    });

    let $readmore = $(".read-more");

    $readmore.click(function(){
        let $el = $(this);
        let $panel = $(".more-info", $el.closest(".card"));
        let isPanelHidden = panel.hasClass("hidden")

        if($panel.length)
        {
            if(isPanelHidden === true)
            {
                $panel.slideDown(function(){
                    $(this).removeClass("hidden");
                });

                $("span.text", this).text("Less Information");
                $("svg", this).addClass("rotate");
            } 
            else 
            {
                $panel.slideUp(function(){
                    $(this).addClass("hidden");
                });

                $("span.text", this).text("More Information");
                $("svg", this).removeClass("rotate");
            }
        }
    });

})(jQuery, window);