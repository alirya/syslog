import Syslog from "../syslog";
/**
 * get {@link Syslog.message} type
 */
declare type Infer<Type> = Type extends Syslog<infer As> ? As : never;
export default Infer;
