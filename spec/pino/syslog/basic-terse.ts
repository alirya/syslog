import Pino from "../../../dist/pino/syslog.js";
import Level from "../../../dist/terse/level/level.js";

const pino = Pino({
    transport: {
        target: 'pino-pretty',
        options : {
            minimumLevel: Level[Level.DEBUG],
            colorize: true,
        }
    },
    useOnlyCustomLevels: true,
    level: Level[Level.DEBUG],
}, Level);

pino.emerg('message emergency', {key:'emergency'});
pino.alert('message alert', {key:'alert'});
pino.crit('message critical', {key:'critical'});
pino.error('message error', {key:'error'});
pino.warning('message warning', {key:'warning'});
pino.notice('message notice', {key:'notice'});
pino.info('message informational', {key:'informational'});
pino.debug('message debug', {key:'debug'});
