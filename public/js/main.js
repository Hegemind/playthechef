(function ($) {
	"use strict";

    jQuery(window).load(function(){

        // Preloader
        $("#preloader").fadeOut(500);
        
        // $("#recipeCreationFailure").hide();
        // $("#recipeCreationSuccess").hide();

    });

}(jQuery));



 $( "#createRecipeButton" ).click(function() {
    $.ajax({
        method: "POST",
        url: "https://playthechef-leandroguillen.c9users.io/recipes",
        data: {
            "id": $("#recipeNameInput").val(),
            "description": $("#descriptionTA").val()
        }
    })
    .done(function( msg ) {
       $("#recipeCreationFailure").hide();
       $("#recipeCreationSuccess").show();
    })
    .fail(function( msg ) {
       $("#recipeCreationFailure").show();
       $("#recipeCreationSuccess").hide();
    });
});


 $( "#getRecipeButton" ).click(function() {
    $.ajax({
        method: "GET",
        url: "https://playthechef-leandroguillen.c9users.io/recipes/" + $("#getRecipeNameInput").val()
    })
    .done(function( msg ) {
       $("#message").text(JSON.stringify(msg))
    })
    .fail(function( msg ) {
       $("#message").text(JSON.stringify(msg))
    });
});
