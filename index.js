
function partyTime() {
    return "I want to go home.";
}




function receivesAFunction(goHome) {
    partyTime();
    goHome();

}

function returnsANamedFunction() {
return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function () {}
}