var html = $('html');

$(function () {
    applyDarkMode();
    darkModeToggle();
    carousel();
    truncate_text();
});

function applyDarkMode() {
    // Check if 'janus_dark' is set to true in localStorage and add the dark-mode class if it is
    if (localStorage.getItem('janus_dark') === 'true') {
        html.addClass('dark-mode');
    }
}

function darkModeToggle() {
    $('.toggle-track').on('click', function () {
        // Toggle the 'dark-mode' class on the HTML element
        html.toggleClass('dark-mode');
        
        // Update localStorage with the current state of dark mode
        if (html.hasClass('dark-mode')) {
            localStorage.setItem('janus_dark', true);
        } else {
            localStorage.setItem('janus_dark', false);
        }
    });
}

function carousel() {
    var carousel = $('.carousel');
    var postImage = carousel.find('.post-image');
    var imageHeight, nav;

    function moveNav() {
        imageHeight = postImage.height();
        if (!nav) {
            nav = carousel.find('.owl-prev, .owl-next');
        }
        nav.css({
            /*
                This line dynamically calculates the height of the nav buttons
                based on the image height and an integer offset
                to compensate the padding of the card.
                
                See ".carousel-item" class and its padding attribute.
                That value is multiplied by 2 since padding is applied from all sides
                (top and bottom being the relevant ones in this case).
            */
            top: ((imageHeight / 2) + 32) + 'px',
            opacity: 1,
        });
    }

    // See documentation below for more configuration options:
    // https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    carousel.owlCarousel({
        dots: false,
        margin: 32,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor"><path d="M20.547 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor"><path d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        onInitialized: function () {
            moveNav();
            carousel.css('visibility', 'visible');
        },
        onResized: function () {
            moveNav();
        },
        responsive: {
            0: {
                items: 1,
            },
            512: {
                items: 2,
            },
            792: {
                items: 3,
            },
            1080: {
                items: 4,
            },
        },
    });
}

/*
    Obtains all instances of "truncate-this-text"
    and truncates them to 50 characters (to the nearest word)
    via lodash's truncate function.
    - See documentation here: https://lodash.info/doc/truncate

    Why like this instead of using Ghost's built-in truncation?
    
    Because it doesn't unfortunately work for custom excerpts,
    as per the documentation here: https://ghost.org/docs/themes/helpers/excerpt/.
     
    Also, CSS truncation only works well for single-line text, as per:
    https://stackoverflow.com/questions/33058004/applying-an-ellipsis-to-multiline-text.
*/
function truncate_text() {
    const excerpts = document.querySelectorAll('.truncate-this-text');
    excerpts.forEach(excerpt => {
      const excerptText = excerpt.textContent;
      const truncatedExcerpt = _.truncate(excerptText, { 'length': 50, 'separator': /,? +/ });
      excerpt.textContent = truncatedExcerpt;
    });
}