const loopyLighthouse = function(range, multiples, words) {

    for (let i = range[0]; i <= range[1]; i++) {
        let str = "";

        if (i % multiples[0] === 0)
            str += words[0];
        if (i % multiples[1] === 0)
            str += words[1];
        if (str === "")
            str = i;

        console.log(str);
    }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);