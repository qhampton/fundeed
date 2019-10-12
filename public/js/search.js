/* eslint-disable */
let allUsers = [];
// Zip Function
function getLangLat(USERZIP, RADIUS) {
    var api =
        "https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=" +
        USERZIP +
        "&key=17o8dysaCDrgv1c";
    $.ajax({
        url: api,
        type: "GET"
    }).then(function (result) {
        console.log(result.output[0].latitude);
        console.log(result.output[0].longitude);
        let lat = result.output[0].latitude;
        let long = result.output[0].longitude;
        var rn = Math.floor(Math.random() * 9999);
        var ajaxurl =
            "https://cors-anywhere.herokuapp.com/https://www.freemaptools.com/ajax/us/get-all-zip-codes-inside.php";
        $.ajax({
            url: ajaxurl,
            type: "GET",
            data: {
                radius: RADIUS,
                lat: lat,
                lng: long,
                rn: rn,
                showPOboxes: false
            },
            dataType: "xml",
            success: function (result) {
                console.log(result);
                var zipList = [];
                var xmarkers = result.documentElement.getElementsByTagName("postcode");
                console.log(xmarkers);
                for (var i = 0; i < xmarkers.length; i++) {
                    zipList.push(xmarkers[i].getAttribute("postcode"));
                }
                allZips(zipList);
            },
            error: function (x, y, z) {
                console.log(x, y, z);
            }
        });
    });
}

function allZips(ziplist) {
    console.log(ziplist);

    $.ajax({
        type: 'GET',
        url: "/api/search/users",
        data: {
            ziplist: ziplist
        }
    }).then(function (result) {
        console.log("Success: ", result);
        allUsers = result;
        check();
    }).catch(function (err) {
        console.log("Error: ", err);
    });
};

// When Document Loads -- Find Users within the requested Zip Code Ran
$(document).ready(function () {

    //Log Document is Ready
    console.log("Document is ready... Searching for Users");

    // Get User Zip Code Information
    $.ajax({
        type: 'GET',
        url: "/api/user"
    }).then(function (reply) {

        // Log Response
        console.log("Reply: ", reply);

        //Get Zipcode Function
        getLangLat(reply.zipcode, reply.searchRadius);
    });
});

function check() {
    console.log("Global Array", allUsers);
    displayUser();
}

function displayUser() {
    if (allUsers.length === 0) {
        $("#label").text("No User");
        $("#bio").val("No users in your area. Try again later.");
    } else {
        $("#label").text(allUsers[0].firstName + "'s User Bio");
        $("#bio").val(allUsers[0].bio);
        $("#bio").attr('user-id', allUsers[0].auth_id);
    }
}

function clearPosition() {
    allUsers.shift();
    console.log(allUsers);
}

$("#passBtn").on("click", function () {
    console.log("PASS");
    clearPosition();
    displayUser();
});

$("#connectBtn").on("click", function(){
    console.log("Start connect");
    let id = $("#bio").attr('user-id');
    console.log(id);
    $.ajax({
        type: 'GET',
        url: '/api/matches',
        data:{
            auth_id: id
        }
    }).then(function(reply){
        console.log("Reply",reply);
        if(reply.length === 0){
            console.log("No entries found");
            $.ajax({
                type: 'POST',
                url: '/api/matches',
                data:{
                    auth_id: $("#bio").attr('user-id'),
                    name: allUsers[0].firstName
                }
            }).then(function(reply){
                console.log("Created", reply);
                clearPosition();
                displayUser();
            });
        }else{
            console.log("Entries found", reply[0].id);
            $.ajax({
                type: 'PUT',
                url: '/api/matches',
                data:{
                    id: reply[0].id
                }
            }).then(function(reply){
                console.log("Matched!",reply);
                alert("You got a match!");
                clearPosition();
                displayUser();
            });
        }
    });
});