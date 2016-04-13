$(document).ready(function() {
	const FOOTNOTE_FRAME = "<div class='footnote_content yyy'>xxx</div>";

	$(".fn").click(function(event) {
		event.preventDefault();
		var footnote_id = $(this).attr('href').replace('#','');
		console.log( $('[class *= ' + footnote_id + ']').attr('class') );
		if ( $('[class *= ' + footnote_id + ']').attr('class') == undefined ) {
			var x = $(this).text();
			var footnote_content = x + ': ' + $('[id = ' + footnote_id + ']').html();
			var final_footnote = FOOTNOTE_FRAME.replace("xxx", footnote_content);
			final_footnote = final_footnote.replace('yyy', $(this).attr('href'));
			$(this).parent().parent().after( final_footnote );
		}		
	});

	$($("body")).on('click', '.footnote_content', function(event) {
		event.preventDefault();
		$(this).remove();

	});

});

/*

		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script><!--jquery-->
		<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script><!--jquery-->
		<script src="../js/footnote.js"></script><!-- footnote -->

		<sup><a class="fn" href="#fn1">1</a></sup>  
		<sup><a class="fn" href="#fn2">2</a></sup> 

		<aside class="footnotes">
					<div id="fn1">This is my first footnote</div>
					<div id="fn2">This is my second footnote</div>
		</aside>

		style on _sass/_footnotes.scss
*/