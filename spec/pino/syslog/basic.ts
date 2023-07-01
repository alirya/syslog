import Pino from "../../../dist/pino/syslog.js";
import Level from "../../../dist/level/level.js";

const pino = Pino({
    transport: {
        target: 'pino-pretty',
        options : {
            minimumLevel: Level[Level.DEBUG],
            colorize: true,
        }
    },
    level: Level[Level.DEBUG],
}, Level);

pino.emergency('message emergency', {key:'emergency'});
pino.alert('message alert', {key:'alert'});
pino.critical('message critical', {key:'critical'});
pino.error('message error', {key:'error'});
pino.warning('message warning', {key:'warning'});
pino.notice('message notice', {key:'notice'});
pino.informational('message informational', {key:'informational'});
pino.debug('message debug', {key:'debug'});
