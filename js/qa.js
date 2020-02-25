$(function(){
    $('.main-faq dd').hide();
    $('.main-faq dt').click(function(){
        $(this).not(':animated').toggleClass('main-faq__que--change');
        $('+dd',this).not(':animated').slideToggle(this);
    });
});