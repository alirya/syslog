import {IsNumeric} from '@axiona/string/boolean/numeric.js';

export default function EnumStringKeys<
    Type extends Record<string, any>
>(
    record: Type
) : (keyof Type)[] {

    return Object.keys(record)
        .filter(key => !IsNumeric(key))
}
