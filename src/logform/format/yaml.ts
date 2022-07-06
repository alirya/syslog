import {Format, TransformableInfo} from "logform";
import moment from "moment-timezone";
import TripleBeam from 'triple-beam.js';
import Trim from "@alirya/string/trim-parameters";
import ToYaml from "../../string/to-yaml";
import {DumpOptions} from "js-yaml";

export type YamlOption = DumpOptions & {
    timezone : string;
    format : string
};

export default class Yaml implements Format {


    constructor(public options: YamlOption) {

    }

    transform (transform : TransformableInfo, opts?: any) :  TransformableInfo {

        const date = moment().tz(this.options.timezone).format(this.options.format) + ' ' + transform.level.padEnd(7, ' ');
        const message = transform.message;

        let meta : any[] = transform[
            // @ts-ignore
            Symbol.for('splat')
        ];

        let body : string = '';

        if(meta) {

            body = ToYaml(meta, this.options);
        }

        transform[TripleBeam.MESSAGE] = Trim(`${date}: ${message}\n${body}`);

        return transform;
    }
}

