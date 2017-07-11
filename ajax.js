document.addEventListener("DOMContentLoaded", function() {

  //  DECLARE VARIABLES
  var button = document.getElementById( 'get_root' );
  var pingRequest = document.getElementById( 'ping' );
  // REGISTER EVENT HANDLERS

  button.addEventListener( 'click', function() {
  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/',
        method: 'GET',
        dataType: 'text',
      });
    });

  pingRequest.addEventListener( 'click', function() {
  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/ping',
        method: 'GET',
        dataType: 'text',
      }).done(function (responseData) {
        console.log( responseData );
        var response = document.createElement('p');
        response.innerHTML = responseData;
        document.querySelector('#step3456').append(response);
      }).fail(function () {
        console.log( textStatus, errorThrown );
    });
  });
});
