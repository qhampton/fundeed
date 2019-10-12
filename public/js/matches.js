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
            var div = $("<div>");

            // Define Name Tag
            var nameTag = $("<h1>" + name + "</h1>");

            // add Id to nameTag
            nameTag.attr("data-value", matchid);
            nameTag.attr("id", "match");
            // Append H1 with Match Name
            div.append(nameTag);

            // Display Match Div
            $('#matches').append(div);

        }

    }).then(function () {
        $("#match").on("click", function () {
            console.log("CLICK!!");
            let matchID = $(this).attr("data-value");
            console.log(matchID);
            $.ajax({
                type: 'POST',
                url: '/chat',
                data: {
                    id: matchID
                }
            }).then(function(reply){

            }).catch(function(err){
                console.log("ERROR",err);
            });
        });
    }).catch(function (err) {
        console.log("Error: ", err);
    });
}
