import Level from "../../../../level/level.js";
import {TerseLevel} from "../../../../terse/level/level.js";
import ReverseLevel from "../../../../record/reverse-level.js";


const map = {

    [Level[Level.EMERGENCY]] : 'red',
    // [TerseLevel.EMERG] : 'red',

    [Level[Level.ALERT]] : 'red',

    [Level[Level.CRITICAL]] : 'red',
    // [TerseLevel.CRIT] : 'red',

    [Level[Level.ERROR]] : 'red',
    [Level[Level.WARNING]] : 'yellow',
    [Level[Level.NOTICE]] : 'grey',

    [Level[Level.INFORMATIONAL]] : 'blue',
    // [TerseLevel.INFO] : 'grey',

    [Level[Level.DEBUG]] : 'blue',

};

const reversed = ReverseLevel(Level);


const CustomColors = Object.entries(reversed)
    .map(([key, number]) => `${number}:${map[key]}`)
    .join(',');

export default CustomColors;