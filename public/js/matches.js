/* eslint-disable */

// Grab Users Successful Matches
$(document).ready(function () {
    getMatches();
});

function getMatches() {
    console.log("Getting Matches...");
    $.ajax({
        type: 'GET',
        url: "/api/matches/success"
    }).then(function (result) {
        console.log("Success: ", result);
        // On success display matches

        // Loop through Matches
        for (i = 0; i < result.length; i++) {

            // Grab Match Information
            // Name of Matched User
            name = result[i].profileID;

            // Match Id to be queried for Chat
            matchid = result[i].id;

            // Create Match Div
            var row = $("<div class='row'>");
            var col = $("<div class='col-sm-12'>");
            var div = $("<div>");
            var anchor = $("<a>");
            // Define Name Tag
            var nameTag = $("<h1>" + name + "</h1>");

            // add Id to nameTag
            nameTag.attr("data-value", matchid);
            nameTag.attr("id", "match");
            anchor.attr("href", "/chat/"+matchid);
            // Append H1 with Match Name
            div.append(nameTag);
            anchor.append(div);
            col.append(anchor);
            row.append(col);
            // Display Match Div
            $('#matches').append(row);

        }

    });
    // .then(function () {
    //     $("#match").on("click", function () {
    //         console.log("CLICK!!");
    //         let matchID = $(this).attr("data-value");
    //         console.log(matchID);
    //         $.ajax({
    //             type: 'GET',
    //             url: '/chat/'+matchID
    //         }).then(function(reply){

    //         }).catch(function(err){
    //             console.log("ERROR",err);
    //         });
    //     });
    // }).catch(function (err) {
    //     console.log("Error: ", err);
    // });
}
