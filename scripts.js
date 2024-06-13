
$(document).ready(function() {
    // Hide all submenu lists initially
    $('.components ul').css('display', 'none');

    $('.dropdown-toggle').click(function(event) {
        const $nextElement = $(this).next();

        if ($nextElement.css('display') === 'block') {
            $nextElement.css('display', 'none');
            $(this).find('.arrow').html('&#9660;');
        } else {
            // Hide all other submenus before showing this one
            $('.components ul').css('display', 'none');
            $('.components ul').prev().find('.arrow').html('&#9660;');

            $nextElement.css('display', 'block');
            $(this).find('.arrow').html('&#9650;');
        }
    });

    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Alert that form submitted
        alert('Form submitted!');
    });
});
