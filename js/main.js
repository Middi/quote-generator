function quote () {
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function (data) {
            var post = data.shift();

            var cutContent = post.content.slice(3);
            cutContent = cutContent.substring(0, cutContent.length - 5);
            cutContent = $.trim(cutContent);
 
 $('.quote-place').html("<p><span>&ldquo;</span> " + cutContent + "<span>&rdquo;</span><div class='author'><h4><em>- " + post.title + "</em></h4></div>").fadeIn(400);
           
        },
        cache: false
    });
}


$(document).ready(function () {
    quote();
});

$('#get-quote').on('click', function (e) {

    $('.quote-place').fadeOut(400);
    e.preventDefault();
    quote();
});