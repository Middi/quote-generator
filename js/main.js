function quote() {
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function (data) {
            var post = data.shift();
// Remove begining and end <p> tags and trim any extra white space at the end.
            var cutContent = post.content.slice(3);
            cutContent = cutContent.substring(0, cutContent.length - 5);
            cutContent = $.trim(cutContent);

// Add quote and author to quote place div
            $('.quote-place').html("<p><span>&ldquo;</span> " + cutContent + "<span>&rdquo;</span><div class='author'><h4><em>- " + post.title + "</em></h4></div>").fadeIn(400);

// Set Twitter to content

            var link = document.getElementById("tweet");
            link.setAttribute("href", "https://twitter.com/intent/tweet?text=" + cutContent);

            return false;
        },
        cache: false
    });
}

// New quote on start
$(document).ready(function () {
    quote();
});

// New quote on click
$('#get-quote').on('click', function (e) {

    $('.quote-place').fadeOut(400);
    e.preventDefault();
    quote();
});

// New quote on space bar, N key or right arrow
$(document).keydown(function (e) {
    if (e.which === 32 || e.which === 39 || e.which === 78) {
        $('.quote-place').fadeOut(400);
        e.preventDefault();
        quote();
    }
});
