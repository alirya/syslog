import LevelEnum from "../level.js";

type Level = Record<keyof typeof LevelEnum, number>;

export default Level;
export {Level as TerseLevelRecord};