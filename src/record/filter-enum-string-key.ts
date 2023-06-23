import EnumStringKeys from "../array/enum-string-keys.js";


export default function FilterEnumStringKey(record : Record<string, string|number>) : Record<string, string|number> {

    const result = {};

    for (const name of EnumStringKeys(record)) {

        result[name] = record[name];
    }

    return result;
}