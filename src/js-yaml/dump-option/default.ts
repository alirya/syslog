import {DEFAULT_SCHEMA, DumpOptions} from "js-yaml";
import util from "util";
import ObjectType from "@alirya/object/boolean/object";
import FunctionType from "@alirya/function/boolean/function";

export default function Default<Config extends DumpOptions>(option: Config) : Config {

    const defaults : DumpOptions = {
        schema : DEFAULT_SCHEMA,
        quotingType: "'",
        replacer : (key, value)=>{

            if(Buffer.isBuffer(value)) {

                return `<Buffer length:${value.length}>`
            }

            if(FunctionType(value)) {

                try {

                    return '<' + util.inspect(value).slice(0,2).slice(0, -1) + '>';

                } catch  {

                    return '<Function>';
                }
            }

            if(value instanceof Date) {

                return value.toString()
            }

            if(Array.isArray(value)) {

                return value;
            }

            if(ObjectType(value)) {

                return Object.assign({}, value);
            }

            return value
        }
    };

    return  Object.assign(defaults, option);
}