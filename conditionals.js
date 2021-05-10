/*const raining = false;
const cold = true;

if (raining) {
    console.log("Don't forget your umbrella!");
}

if (cold) {
    console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");*/


/////////////////////////////////////////////////////////////////////////////
/*const temperature = 12;

if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");*/




/////////////////////////////////////////////////////////////////////////////
/*const temperature = -12;
if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
}


/////////////////////////////////////////////////////////////////////////////

let raining = null;
if (!raining) {
    console.log("Leave your umbrella at home!");
}*/




/*const whichSchool = function(age) {

    if (age < 13) {
        console.log("Elementary School");
    } else if (age < 19 && age >= 13) {
        console.log("Secondary School");
    } else {
        console.log("Lighthouse Labs");
    }
    return 0;
}

whichSchool(15);*/


const whichSchool = function(age) {
    let school = "";
    if (age < 13) {
        school = "Elementary School";
    } else if (age < 19 && age >= 13) {
        school = "Secondary School";
    } else {
        school = "Lighthouse Labs";
    }
    return school;
}

console.log(whichSchool(15));