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