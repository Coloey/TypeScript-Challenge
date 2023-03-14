/*核心实现就是通过映射类型遍历T上的所有属性
然后将每个属性设置为可选属性 */
type Partial<T> = {
    [P in keyof T]?: T[P]
}
/*将制定的key变为可选类型*/
type PartialOptional<T,K extends keyof T> = {
    [P in K]?: T[P]
}
/*example:type Eg1={key1?:string,key2?:number}*/
type Eg1 = PartialOptional<{
    key1: string,
    key2:number,
    key3:''
},'key1'|'key2'>