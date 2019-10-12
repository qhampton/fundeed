
/* eslint-disable */

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

/* eslint-disable */

// Grab Users Successful Matches
function getMatches() {
    console.log("Getting Chats...");
    $.ajax({
        type: 'GET',
        url: "/api/chats",
        data: {
            id
        }
    }).then(function(result){
        console.log("Success: ", result);
            // On success display matches

            // Loop through Matches
            for(i=0; i<result.length; i++){

                // Grab Chat Information
                var comment = result[i].comment;

                // Create Match Div
                var div = $("div");
                
                // Define Name Tag
                var comments = $("<h6>"+ comment + "</h6>");

                // Append H1 with Match Name
                div.append(comments);

                // Display Match Div
                $('#chats').append(div);

            }

    }).catch(function(err){

        console.log("Error: ",err);

    });
}