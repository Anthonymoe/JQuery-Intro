$( document ).ready( onReady );
//create a cohort array
let emirp = [];

function onReady() {
    // runs when script is loaded
    console.log( 'JQ' );
    //do a few click handles
    $( '#firstPTag' ).on( 'click', pTagClick );
    $( '.otherPTag' ).on( 'click', otherTagClick );
    $( '#submitButton' ).on( 'click', getInfo );
}//end onReady

function getInfo(){
    console.log( 'in getInfo' );
    //get value from nameIn
    const name = $( '#nameIn' ).val(); //gets the value from the element
    //create a user object
    const user = {
        name: name
    }
    //push user into cohort
    emirp.push( user );
    console.log( emirp );
    //empty the nameIn element
    $( '#nameIn' ).val( '' );//set the value for this element 
}//end getInfo

function pTagClick(){
    console.log( 'clicked on 1st pTag' );
}

function otherTagClick(){
    console.log( 'clicked on a classy element' );
}

//git test 