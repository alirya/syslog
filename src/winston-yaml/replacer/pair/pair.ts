import Callable from '@alirya/function/callable';

type Pair = [Callable<[value: any, key: string], boolean>, Callable<[any], any>];
export default Pair;