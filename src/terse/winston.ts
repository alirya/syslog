import {LoggerOptions, createLogger} from "winston";
import Syslog from './syslog.js';


export default function Winston<
    Arguments extends [string, ...any[]]
>(
    option : LoggerOptions
) : Syslog<Arguments> {

    return createLogger(option) as Syslog<Arguments>;
}

export {Winston as WinstonTerse};




