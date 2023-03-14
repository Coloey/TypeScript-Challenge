//获取T中所有类型为函数的key组成的联合类型
type NonUndefined<T>= T extends undefined ? nerver : T
type FunctionKeys<T extends object> = {
    [K in keyof T]: NonUndefined<T[K]> extends FunctionKeys ? K : nerver
}[keyof T]
/**
 * @example
 * type Eg = 'key2' | 'key3';
 */
 type AType = {
    key1: string,
    key2: () => void,
    key3: Function,
};
type Eg = FunctionKeys<AType>;
//最后经过{省略}[keyof T]索引访问，取到的为值类型的联合类型never | key2 | key3,计算后就是key2 | key3;
/*T[]是索引访问操作，可以取到值的类型，T['a'|'b']可以依次取到值的类型进行联合，
  T[keyof T]则是取到T所有值的类型类型 nerver和其他类型进行联合时,nerver不存在，nerver | number | string = number | string */