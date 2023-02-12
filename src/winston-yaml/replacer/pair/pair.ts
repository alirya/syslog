import Callable from '@alirya/function/callable.js';

type Pair = [Callable<[value: any, key: string], boolean>, Callable<[any], any>];
export default Pair;