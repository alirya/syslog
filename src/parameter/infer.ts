import Syslog from '../syslog.js';

/**
 * get {@link Syslog.message} type
 */
type Infer<Type> = Type extends Syslog<infer As> ? As : never;

export default Infer;
