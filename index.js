function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return function named(){
        console.log('This pc is fast')
    }
}
function returnsAnAnonimousFunction(){
    return function(){
        console.log( 'This pc has no speed')
    }
}