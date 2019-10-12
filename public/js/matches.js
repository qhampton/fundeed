/* eslint-disable */

// Grab Users Successful Matches
function getMatches() {
    console.log("Getting Matches...");
    $.ajax({
        type: 'GET',
        url: "/api/matches/success"
    }).then(function(result){
        console.log("Success: ", result);
            // On success display matches

            // Loop through Matches
            for(i=0; i<result.length; i++){

                // Grab Match Information
                // Name of Matched User
                name = result[i].profileID;

                // Match Id to be queried for Chat
                matchid = result[i].id;

                // Create Match Div
                var div = $("div");
                
                // Define Name Tag
                var nameTag = $("<h1>"+ name + "</h1>");

                // add Id to nameTag
                nameTag.attr("data-value", matchid);

                // Append H1 with Match Name
                div.append(nametag);

                // Display Match Div
                $('#matches').append(div);

            }

    }).catch(function(err){

        console.log("Error: ",err);

    });
}