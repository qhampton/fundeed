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
    // Global Variables
    // *******************



    // *******************
    // User Swipe Functionality
    // *******************

    // On User Click to Accept (Connect)
    $('#connectBttn').on("click", function() {
    
        // Grab User-Id's
        var currentUser = ""; // Logged in User
        var connectedUser = ""; // The OTHER User who was matched with

        // Check Server to see if there is a Current MATCH record
        app.get("/api/matches", function(req, res) {

            console.log("attemptign to find match record...");

            db.User.findAll({}).then(function(matches) {
                res.json(matches);
                console.log(matches);
            });

            // Determine if there are any MATCH Records
            if (matches === 0) {
                
                // If there is a MATCH record - Update Match Record
                console.log("Updating Match Record...");
                
                app.put("/api/matches/:id", secured(), function(req, res) {
                    console.log("Updating Match Record...");

                });

            } else {

                // If there is NOT a Match record - Create a Match Record
                console.log("Creating a new Match Record...");

                app.post("/api/matches", secured(), function(req, res) {
                    console.log("POSTING NEW Match Record ");

                  });
            }
        });
            
        // Then GET NEXT PROFILE
        app.get("/api/examples", function(req, res) {

            console.log("Getting Next Match...")

            db.User.findAll({}).then(function(profile) {
            
                console.log(profile);

              res.json(profile);

            });
        });
        
        // Then Display NEXT Potential MATCH -- Update Page with new Profile Info



  });

  // On User Click to Accept (Connect)
  $('#passBttn').on("click", function() {

        // Then GET NEXT PROFILE
        app.get("/api/examples", function(req, res) {

            console.log("Getting Next Match...")

            db.User.findAll({}).then(function(profile) {
            
                console.log(profile);

              res.json(profile);

            });
        });
        
        // Then Display NEXT Potential MATCH -- Update Page with new Profile Info

  });
// END
});
