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
    //put the cohort list on DOM
    //target ul element
    let el = $( '#cohortOut' );// now the variable el = targeting chortOut on html (cohortOut is an unordered list)
    //empty ul
    el.empty();
    //loop through the cohort array
    for( let i=0; i<emirp.length; i++ ){
    //append each user to the ul on DOM
    el.append ( '<li>' + emirp[i].name + '</li>' );
    }//end for
    //update cohort count
    //target element
    let count = $( '#cohortCount' );
    //empty
    count.empty();
    //append
    count.append( emirp.length );
    //empty the nameIn element
    $( '#nameIn' ).val( '' );//set the value for this element 
}//end getInfo

function pTagClick(){
    console.log( 'clicked on 1st pTag' );
}

function otherTagClick(){
    console.log( 'clicked on a classy element' );
}

