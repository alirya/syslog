import Winston from "../../../../dist/winston/winston.js";
import {transports} from "winston";
import Level from "../../../../dist/level/level.js";
import Yaml from "../../../../dist/winston/format/yaml.js";


const winston = Winston({
    levels: Level,
    level: Level[Level.DEBUG] as keyof typeof Level,
    format: Yaml(),
    transports : [
        new transports.Console({
            level: Level[Level.DEBUG],
        }),
    ]
});


winston.emergency('message emergency', {key:'emergency'});
winston.alert('message alert', {key:'alert'});
winston.critical('message critical', {key:'critical'});
winston.error('message error', {key:'error'});
winston.warning('message warning', {key:'warning'});
winston.notice('message notice', {key:'notice'});
winston.informational('message informational', {key:'informational'});
winston.debug('message debug', {key:'debug'});
