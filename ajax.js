document.addEventListener("DOMContentLoaded", function() {

  //  DECLARE VARIABLES
  var button = document.getElementById( 'get_root' );
  var pingRequest = document.getElementById( 'ping' );
  // REGISTER EVENT HANDLERS

  button.addEventListener( 'click', function() {
    console.log( 'CLICKED GET ROOT BUTTON' );
    console.log( 'BEFORE AJAX REQUEST' );

    // MAKE AJAX REQUEST HERE

  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/',
        method: 'GET',
        dataType: 'html',
      });
    });

  pingRequest.addEventListener( 'click', function() {
    console.log( 'CLICKED GET ROOT BUTTON' );
    console.log( 'BEFORE AJAX REQUEST' );
    // MAKE AJAX REQUEST HERE

  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/ping',
        method: 'GET',
        dataType: 'html',
      });
  });
});
