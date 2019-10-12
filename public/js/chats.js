
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

function testChatPost() {
    console.log("attempting chat post");

    $.ajax({
        type: 'GET',
        url: "/api/user"
    }).then(function (reply) {
        console.log("Reply: ", reply);
        $.ajax({
            type: 'POST',
            url: "/api/chat",
            data: {
                user: reply.firstName + " " + reply.lastName,
                message: "Ayo does this work?"
            }
        }).then(function (result) {
            console.log("Success: ", result);
        }).catch(function (err) {
            console.log("Error: ", err);
        });
    });
}