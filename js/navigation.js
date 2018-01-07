// -------------------------------------
// Template: JS > Navigation
// -------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".template-nav" ).addClass( "closed" );

$( ".button--menu, .button--close" ).click(function() {
	$( ".template-nav" ).toggleClass( "open" ).toggleClass( "closed" );
});


$( ".button--menu, .button--close" ).click(function() {
    $( "html" ).toggleClass( "nav-open" );
});
