import { greet } from "./greet.js";
import { yo } from "./yo.js";

import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

const styledMessage = chalk.bgGreen.black(greet('Kgotso'));
console.log(styledMessage)


console.log(chalk.bgRed.whiteBright(cowsay.say({
    text: greet('Kgotso')
})));

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.bgBlue.whiteBright(data))
})