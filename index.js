// code your solution here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(emphasis = "*") {
    return function youAre (adjective) {
        let IdStatement = `You are ${emphasis}${adjective}${emphasis}!`;
        return IdStatement;
    };
}