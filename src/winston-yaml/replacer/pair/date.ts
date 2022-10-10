import Pair from "./pair";

export default function Date() : Pair {

    return [
        value => value instanceof globalThis.Date,
        value => value.toString()
    ]
}