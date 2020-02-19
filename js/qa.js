$(function(){
    $('.main-faq dd').hide();
    $('.main-faq dt').click(function(){
        $('+dd',this).slideToggle(this);
    });
});