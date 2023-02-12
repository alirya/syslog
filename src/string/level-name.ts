import Level from '../level/level.js';

export default function LevelName(level : Level) : string {

    switch (level) {
        case Level.EMERGENCY :
            return 'emergency';
        case Level.ALERT :
            return 'alert';
        case Level.CRITICAL :
            return 'critical';
        case Level.ERROR :
            return 'error';
        case Level.WARNING :
            return 'warning';
        case Level.NOTICE :
            return 'notice';
        case Level.INFORMATIONAL :
            return 'informational';
        case Level.DEBUG :
            return 'debug';
    }

}