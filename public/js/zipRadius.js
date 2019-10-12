function getLangLat(USERZIP) {
  var api =
    "https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=" +
    USERZIP +
    "&key=17o8dysaCDrgv1c";
  $.ajax({
    url: api,
    type: "GET"
  }).then(function(result) {
    console.log(result.output[0].latitude);
    console.log(result.output[0].longitude);
    ftnLoadPostcodes(10, result.output[0].latitude, result.output[0].longitude);
  });
}

function ftnLoadPostcodes(givenRad, lat, lng) {
  var rn = Math.floor(Math.random() * 9999);
  var ajaxurl =
    "https://cors-anywhere.herokuapp.com/https://www.freemaptools.com/ajax/us/get-all-zip-codes-inside.php";
  $.ajax({
    url: ajaxurl,
    type: "GET",
    data: {
      radius: givenRad,
      lat: lat,
      lng: lng,
      rn: rn,
      showPOboxes: false
    },
    dataType: "xml",
    success: function(result) {
      console.log(result);
      sendZip(result);
    },
    error: function(x, y, z) {
      console.log(x, y, z);
    }
  });
}

function sendZip(result) {
  var zipList = [];
  var xmarkers = result.documentElement.getElementsByTagName("postcode");
  console.log(xmarkers);
  for (var i = 0; i < xmarkers.length; i++) {
    zipList.push(xmarkers[i].getAttribute("postcode"));
  }
  console.log(zipList);
}

getLangLat(92111);
