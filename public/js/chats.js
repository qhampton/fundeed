/* eslint-disable */

// console.log(
//* ***************************************************************
//
//                        ---                                     
//                     -        --
//                 --( /     \ )XXXXXXXXXXXXX
//             --XXX(   O   O  )XXXXXXXXXXXXXXX-              
//            /XXX(       U     )        XXXXXXX\               
//          /XXXXX(              )--   XXXXXXXXXXX\             
//         /XXXXX/ (      O     )   XXXXXX   \XXXXX\
//         XXXXX/   /            XXXXXX   \   \XXXXX----        
//         XXXXXX  /          XXXXXX         \  ----  -         
// ---     XXX  /          XXXXXX      \           ---        
//   --  --  /      /\  XXXXXX            /     ---=         
//     -        /    XXXXXX              '--- XXXXXX         
//       --\/XXX\ XXXXXX                      /XXXXX         
//         \XXXXXXXXX                        /XXXXX/
//          \XXXXXX                         /XXXXX/         
//            \XXXXX--  /                -- XXXX/       
//             --XXXXXXX---------------  XXXXX--         
//                \XXXXXXXXXXXXXXXXXXXXXXXX-            
//                  --XXXXXXXXXXXXXXXXXX-
//
//
//* ***************************************************************
// );

/* eslint-disable */

$(document).ready(function () {
    getChat();

    $("#submit").on("click",function(req,res){
        let message = $("#comment").val();
        postChat(message);
    });
});



function postChat(message) {
    let id = $("#secret").attr("matches");
    $.ajax({
        type: 'GET',
        url: "/api/user"
    }).then(function (reply) {
        let name = reply.firstName;
        $.ajax({
            type: 'POST',
            url: '/api/chat',
            data: {
                user: name,
                message,
                MatchId: id
            }
        }).then(function (reply) {
            console.log(reply);
            document.location.reload();
        });
    });
}

function getChat() {
    let id = $("#secret").attr("matches");
    $.ajax({
        type: 'GET',
        url: '/api/chat',
        data: {
            id
        }
    }).then(function (result) {
        // Loop through Matches
        for (i = 0; i < result.length; i++) {

            // Grab Chat Information
            var comment = result[i].message;
            var user = result[i].user;
            // Create Match Div
            var row = $("<div class='row'>");
            var col = $("<div class='col-sm-12'>");
            var div = $(`<div style="display: block;">`);

            // Define Name Tag
            var comments = $("<h6>" + user + ": " +comment + "</h6>");

            // Append H1 with Match Name
            div.append(comments);
            col.append(div);
            row.append(col);
            // Display Match Div
            $('#chats').append(row);
            $('#chats').append("<br>");
            $('#chats').append("<hr>");
            
            

        }
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });
}

// Grab Users Successful Matches
function getMatches() {
    console.log("Getting Chats...");
    $.ajax({
        type: 'GET',
        url: "/api/matches/success",
    }).then(function (result) {
        let idList = [];
        result.forEach(function (content) {
            idList.push(content.id);
        });
        console.log("Success: ", idList);
        $.ajax({
            type: 'GET',
            url: '/api/chats',

        })
        // On success display matches

        // Loop through Matches
        for (i = 0; i < result.length; i++) {

            // Grab Chat Information
            var comment = result[i].comment;

            // Create Match Div
            var div = $("div");

            // Define Name Tag
            var comments = $("<h6>" + comment + "</h6>");

            // Append H1 with Match Name
            div.append(comments);

            // Display Match Div
            $('#chats').append(div);

        }

    }).catch(function (err) {

        console.log("Error: ", err);

    });
}