$(document).ready(function() {
	const MARGIN_NOTE_FRAME = "<span class='margin_note_content' id='yyy'>xxx</span>";

	$(".margin_note_call").mouseenter(function(event) {
		event.preventDefault();
		// check if there is a flex wrapper
		if ($(this).parent().hasClass('ahoy'))
			{
				//
			} else {
				$(this).parent().wrap("<div class='margin_note_wrapper'></div>"); //wrap p in div
				$(this).parent().parent().prepend("<div class='margin_note_section'></div>"); //add div to wrapper
			}
		var margin_note_id = 'mn_' + $(this).attr('id');

		if ( $('#' + margin_note_id).length === 0 ) {
			var margin_content = $(this).attr('desc');		
			var $margin_note = MARGIN_NOTE_FRAME.replace('xxx',margin_content).replace('yyy',margin_note_id);
			$(this).parent().addClass('ahoy');
			$(this).parent().parent().children(".margin_note_section").append($margin_note);
		} else {
			$('#' + margin_note_id).remove();
			if ( $(this).parent().parent().children('.margin_note_section').children().length === 0 ){
				$(this).parent().parent().children('.margin_note_section').remove();
				$(this).parent().unwrap("<div class='margin_note_wrapper'></div>");
				$(this).parent().removeClass('ahoy');
			}
		}
	});	

});

/* html

		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script><!--jquery-->
		<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script><!--jquery-->
		<script src="../js/margin_note.js"></script><!-- marginnote -->

		<p> <!-- only tested on paragraphs -->
		Lorem ipsum dolor sit amet, 
		
		<span class="margin_note_call" desc="labore humanum est" id="labore">
		labore
		</span> 

		Ut enim ad minim veniam.
		</p>

		style on _sass/_margin_notes.scss
*/