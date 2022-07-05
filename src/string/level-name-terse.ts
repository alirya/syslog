import Level from "../level/level";

export default function LevelNameTerse(level : Level) : string {

    switch (level) {
        case Level.EMERG :
            return 'emerg';
        case Level.ALERT :
            return 'alert';
        case Level.CRIT :
            return 'crit';
        case Level.ERROR :
            return 'error';
        case Level.WARNING :
            return 'warning';
        case Level.NOTICE :
            return 'notice';
        case Level.INFO :
            return 'info';
        case Level.DEBUG :
            return 'debug';
    }

}