import {Format, TransformableInfo} from "logform";
import moment from "moment-timezone";
import TripleBeam from 'triple-beam';
import { TrimParameters } from "@alirya/string/trim.js";
import {DumpOptions, dump, DEFAULT_SCHEMA} from "js-yaml";

export type YamlOption = DumpOptions & {
    timezone : string;
    format : string
};

export const YamlDefaultDumpOption : DumpOptions = Object.freeze({
    schema : DEFAULT_SCHEMA,
    quotingType: "'",
});

export default class Yaml implements Format {

    public options: YamlOption;

    constructor(options: YamlOption) {

        this.options = Object.assign({}, YamlDefaultDumpOption, options);
    }

    transform (transform : TransformableInfo, opts?: any) :  TransformableInfo {

        const date = moment().tz(this.options.timezone).format(this.options.format) + ' ' + transform.level.padEnd(7, ' ');
        const message = transform.message;

        const meta : any[] = transform[
            // @ts-ignore
            Symbol.for('splat')
        ];

        let body  = '';

        if(meta) {

            body = dump(meta, this.options)
        }

        transform[TripleBeam.MESSAGE] = TrimParameters(`${date}: ${message}\n${body}`);

        return transform;
    }
}

