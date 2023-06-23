import {TerseLevel} from "../../../dist/terse/level/level.js";
import Winston from "../../../dist/winston/winston.js";
import {transports} from "winston";

const winston = Winston({
    levels: TerseLevel,
    level: TerseLevel[TerseLevel.DEBUG] as keyof typeof TerseLevel,
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
