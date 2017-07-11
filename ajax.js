document.addEventListener("DOMContentLoaded", function() {

  //  DECLARE VARIABLES
  var button = document.getElementById( 'get_root' );
  var pingRequest = document.getElementById( 'ping' );
  var stepSeven = document.getElementById( 'hive_mind' );
  // Run AJAX Request to Count
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
        console.log( 'The url is incorrect. Try harder next time' );
        // console.log( textStatus, errorThrown );
      }).always(function () {
        console.log( 'Request complete')
    });
  });

  hive_mind.addEventListener( 'click', function() {
  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/count',
        method: 'GET',
        dataType: 'text',
      }).done(function (responseData) {
        console.log( responseData );
        var response = document.createElement('p');
        response.innerHTML = responseData;
        document.querySelector('#step7').append(response);
      }).fail(function () {
        console.log( 'The url is incorrect. Try harder next time' );
      }).always(function () {
        console.log( 'Request complete')
    });
  });

  time.addEventListener( 'click', function() {
  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/time',
        method: 'GET',
        // data: {},
        dataType: 'html'
      }).done(function (responseData) {
        console.log( responseData );
        var response = document.createElement('p');
        response.innerHTML = responseData;
        document.querySelector('#step8').append(response);
      }).fail(function () {
        console.log( 'The url is incorrect. Try harder next time' );
      }).always(function () {
        console.log( 'Request complete')
    });
  });

  car.addEventListener( 'click', function() {
  $.ajax( {
        url: 'http://first-ajax-api.herokuapp.com/a_car',
        method: 'GET',
         data: {
           timezone: 'Pacific/Honolulu'
         },
         dataType: 'text'
      }).done(function (responseData) {
        console.log( responseData );
        var carList = document.createElement('ul');
        carList.innerHTML = responseData;
        document.getElementById('step9').append(carList);
      }).fail(function () {
        console.log( 'The url is incorrect. Try harder next time' );
      }).always(function () {
        console.log( 'Request complete')
    });
  });

});
