/////////////main js////////////////////



////////mobile navigation//////////////
$('#hamburger').click(function(){
    var mobNav = $('.main-nav');

    if ($(mobNav).css('display') === 'none') {
        $(mobNav).fadeIn();
    }else {
        $(mobNav).fadeOut();
    }

});
