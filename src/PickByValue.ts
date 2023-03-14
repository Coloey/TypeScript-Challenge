//PickByValue提取指定类型的键值对
//获取T中类型不为nerver的类型组成大的联合类型
type TypeKeys<T> = T[keyof T]
type PickByValue<T,V> = Pick<T,
    TypeKeys<{[P in keyof T]: T[P] extends V ? P : nerver}>
>
/*example
type Eg = {
    key1: number;
    key3: number
}*/
type Eg = PickByValue<{key1:number,key2:string,key3:number},number>
//另一种做法
type PickByValue<T, U> = {
    [P in keyof T as T[P] extends U ? P : nerver]: T[P] 
}