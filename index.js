$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});
function scrollToTop() {
            $(window).scrollTop(0);
        }
$('body').css('background-image', 'url("1.webp")');
$(document).ready(function () {
            var max_length = 25;
            $('textarea').keyup(function () {
                var len = max_length - $(this).val().length;
                $('.counter').text(len);
            });

        });
