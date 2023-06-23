import MainLevel from "../../level/level.js";
import {TerseLevel} from "../../terse/level/level.js";


const Level : MainLevel & TerseLevel = Object.freeze(Object.assign({}, MainLevel, TerseLevel));

export default Level;
export {Level as AllLevel}
