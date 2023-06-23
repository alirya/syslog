import Level from "../level.js";
import {IsNumeric} from '@alirya/string/boolean/numeric.js';
import EnumStringKeys from "../../../array/enum-string-keys.js";


const Keys = Object.freeze(EnumStringKeys(Level));

export default Keys;
export {Keys as TerseLevelKeys};