/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */


console.log(
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
);

// Run when Document is Ready
$(document).ready(function() {

    console.log("Document is Ready...");

    // *******************
    // User Swipe Functionality
    // *******************
    
    // On User Click to Accept (Connect)
    $('#connectBttn').on("click", function() {
    
        // Grab User-Id's
        var currentUser = ""; // Logged in User
        var connectedUser = ""; // The OTHER User who was matched with

         // Performing our AJAX GET request
        $.ajax({
            url: "",
            method: "GET"
        }).then(function(response) {

            var results = response.data;

            console.log(results);

            // Determine if there is a MATCH record
            if (results === 0) {

                // If there is NO RESULTS -- i.e MATCHES
                console.log("Creating a new Match Record...");

                $.ajax({
                    url: "",
                    method: "PUT"
                }).then(function(response) {
                    
                    console.log("Match Record Created...");
                    console.log(response);

                });

            } else {

                // If there is a RESULT -- i.e MATCH
                console.log("Updating existing Match Record...");

                $.ajax({
                    url: "",
                    method: "POST"
                }).then(function(response) {
                    
                    console.log("Match Record Updated...");
                    console.log(response);

                });

            } // END ELSE STATEMENT
        });

        // GRAB NEW USER

        console.log("Getting new Potential Profile...");
    
        $.ajax({
            url: "",
            method: "GET"
        }).then(function(response) {
            
            console.log("New Profile Found...");
            console.log(response);

            // Take response and Post to Page

        });
      
    });

  // On User Click to Accept (Connect)
  $('#passBttn').on("click", function() {

        // GRAB NEW USER

        console.log("Getting new Potential Profile...");
    
        $.ajax({
            url: "",
            method: "GET"
        }).then(function(response) {
            
            console.log("New Profile Found...");
            console.log(response);

            // Take response and Post to Page

        });

    });
// END
});
