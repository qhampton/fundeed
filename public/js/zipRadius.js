function getLangLat(USERZIP) {
    // document.write("Loading");
    let url = `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${USERZIP}&key=17o8dysaCDrgv1c`;
    $.ajax({
        url: url,
        type: 'GET'
    }).then(result => {
        console.log(result.output[0].latitude);
        console.log(result.output[0].longitude);
        ftnLoadPostcodes(10, result.output[0].latitude, result.output[0].longitude);
    });
}

function ftnLoadPostcodes(givenRad, lat, lng) {
    let rn = Math.floor(Math.random() * 9999);
    let ajaxurl = "https://cors-anywhere.herokuapp.com/https://www.freemaptools.com/ajax/us/get-all-zip-codes-inside.php";
    $.ajax({
        url: ajaxurl,
        type: "GET",
        data: {
            "radius": givenRad,
            "lat": lat,
            "lng": lng,
            "rn": rn,
            "showPOboxes": false
        },
        dataType: 'xml',
        success: function (result) {
            console.log(result);
            sendZip(result);
        },
        error: function (x, y, z) {
            console.log(y);
        }
    });
}

function sendZip(result) {
    let zipList = [];
    let xmarkers = result.documentElement.getElementsByTagName("postcode");
    console.log(xmarkers);
    for (var i = 0; i < xmarkers.length; i++) {
        zipList.push({ zip: xmarkers[i].getAttribute("postcode")});
    }
    console.log(zipList);
    $.ajax({
        url: "/testing",
        type: 'POST',
        data: zipList
    });
    console.log("DONE!");
}