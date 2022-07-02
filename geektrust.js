const fs = require("fs");
const raceday = require("./trackOperations");
const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    //console.log('data: \n', data.toString());
    const commandline = data.toString().split("\n");
    const commands = commandline.map((elem) => elem.split(' '));

    for (let command of commands) raceday[command[0].toLowerCase()](command.slice(1));
});
