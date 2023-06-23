import {IsNumeric} from '@alirya/string/boolean/numeric.js';

export default function ReverseLevel(record: Record<string|number, string|number>) : Record<string, number> {

    const list = Object.entries(record)
        .filter(([key, value]) => IsNumeric(value)) as [string, number][];

    const sorts = [
        {
            key:'asc',
            sort:([, value1], [, value2]) => value1 - value2
        },
        {
            key:'desc',
            sort:([, value1], [, value2]) => value2 - value1
        },
    ];

    const enums = sorts.map(({key, sort}) => {

        return  list
            .slice(0)
            .sort(sort);
    });

    return  Object.assign({}, ...enums[0].map(([key, value], index) => {

        return {[key]: enums[1][index][1]};

    }))

}