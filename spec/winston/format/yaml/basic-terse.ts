import Winston from "../../../../dist/winston/winston.js";
import {transports} from "winston";
import Yaml from "../../../../dist/winston/format/yaml.js";
import {TerseLevel} from "../../../../dist/terse/level/level.js";


const winston = Winston({
    levels: TerseLevel,
    level: TerseLevel[TerseLevel.DEBUG] as keyof typeof TerseLevel,
    format: Yaml(),
    transports : [
        new transports.Console({
            level: TerseLevel[TerseLevel.DEBUG],
        }),
    ]
});


winston.emerg('message emergency', {key:'emergency'});
winston.alert('message alert', {key:'alert'});
winston.crit('message critical', {key:'critical'});
winston.error('message error', {key:'error'});
winston.warning('message warning', {key:'warning'});
winston.notice('message notice', {key:'notice'});
winston.info('message informational', {key:'informational'});
winston.debug('message debug', {key:'debug'});
