$(document).ready(function(){
    $(".about-date__open-close").click(function () {
        console.log("1111");
        $(this).toggleClass("active");
        $(this).toggleClass("open-description");
        $(this).closest('.about-date__item').children(".about-date__item-full-description").slideToggle("slow");
    });
});

