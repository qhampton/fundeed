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

function testPut() {
    console.log("attempting put");
    $.ajax({
        type: 'PUT',
        url: "/api/userAccount",
        data:{
            username: "bobDylan321",
            lastName: "Dylan",
            firstName: "Bob",
            birthdate: "01/01/1990",
            zipcode: 92111,
            searchRadius: "10"
        }
    }).then(function(result){
        console.log("Success: ", result);
    }).catch(function(err){
        console.log("Error: ",err);
    });
}