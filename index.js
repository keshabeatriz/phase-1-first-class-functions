function receivesAFunction(x) {
    console.log(x());
}

function returnsANamedFunction() {
    return (function name(){
        console.log('hi')
    });
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`hello`)};
}