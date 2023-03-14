type Res = Without<[1,2], 1>;//expected to be 2
//T[number]可以找出元组的所有值，元组的索引默认为number
type toUnion<T> = T extends any[] ? T[number] : T;
type Without<T extends any[], R> = {
    T extends [infer F, ...infer O] 
    ? F extends toUnion<R> 
        ? [...Without<O,R>]
        : [F, ...Without<O,R>]
    : T
}