import {DEFAULT_SCHEMA, dump, DumpOptions} from "js-yaml";
import * as util from "util";
import ObjectType from "@axiona/object/boolean/object.js";
import FunctionType from "@axiona/function/boolean/function.js";

export default function ToYaml(data : any, option: DumpOptions = {}) : string {

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

            if(Array.isArray(value)) {

                return value;
            }

            if(ObjectType(value)) {

                return Object.assign({}, value);
            }

            return value
        }
    };

    option = Object.assign(defaults, option);

    return dump(data, option);
}
