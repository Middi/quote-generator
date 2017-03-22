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

            // ----- Set Twitter to content ----- //

            // Correct for URL utf-8
            var contentSpaces = encodeURI(cutContent)
            .replace(/;/g, '%3B').replace(/&#8217%3B/g, '%27').replace(/"/g, '%22').replace(/&#8211%3B/g, '%2D').replace(/&#8212%3B/g, '%5F').replace(/;/g, '%3B').replace(/&#8220%3B/g, '%E2%80%9C').replace(/&#8221%3B/g, '%E2%80%9D').replace(/&#8230%3B/g, '%E2%80%A6').replace(/&#8216%3b/g, '%60');
                
            // Set Link
            var link = document.getElementById("tweet");
            link.setAttribute("href", "https://twitter.com/intent/tweet?text=" + contentSpaces + "%0D%0A%0D%0A%E2%80%93%20" + post.title);

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

// ---- Key functions ---- //
$(document).keydown(function (e) {

// New quote on space bar, N key or right arrow
    if (e.which === 32 || e.which === 39 || e.which === 78) {
        $('.quote-place').fadeOut(400);
        e.preventDefault();
        quote();
    }

// New tweet on T key
    if (e.which === 84) {
        document.getElementById("tweet").click();
    }
});
