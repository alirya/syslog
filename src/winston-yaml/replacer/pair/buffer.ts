import Pair from "./pair";


export default function Buffer() : Pair {

    return [
        globalThis.Buffer.isBuffer,
        value => `<Buffer length:${value.length}>`
    ]
}