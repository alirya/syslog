import Level from '../../level/level.js';
import {TerseLevel} from "../level/level.js";

const list = new Map<number|string, string>(
    Object.entries<number|string>(TerseLevel)
        .map(([name , value]) => [value, name])
)

export default function LevelName(level : Level) : string {

    const value : undefined|string = list.get(level);

    if(!value) {

        throw new TypeError(`level ${level} is invalid`);
    }

    return value;
}

export {LevelName as TerseLevelName};