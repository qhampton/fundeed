/* eslint-disable */

// Document on Ready
$(document).ready(function () {

    console.log("Document Ready...");
    // Load Data

    
});

// Update User Profile Function
function updateProfile(event) {
    let birthdate = $("#birthdate").val();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let username = $("#username").val();
    let zipcode = $("#zip").val();
    let searchRadius = $("#radius").val();
    let bio = $("#bio").val();

    // Log Values
    console.log(birthdate);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(username);
    console.log(zipcode);
    console.log(searchRadius);
    console.log(bio);

    $.ajax({
        type: 'PUT',
        url: "/userAccount",
        data: {
            username,
            lastName,
            firstName,
            searchRadius,
            birthdate,
            zipcode,
            email,
            bio
        }
    }).then(function (result) {
        console.log("Success: ", result);
    }).catch(function (err) {
        console.log("Error: ", err);
    })
}

$("#submit").on("click", function () {

    console.log("Updating User");

    updateProfile();
});


