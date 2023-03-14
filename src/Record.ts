//key 为联合类型中的每个子类型，类型为T
//keyof any得到的是string | number |symbol
//类型key的类型只能为string | number | symbol
type Record<K extends keyof any, T>={
    //遍历key,将值设为T
    [P in K]:T
}
/*example: type Eg2 = {a:B,b:B}*/
interface A {
    a:string,
    b:number
} 
interface B {
    key1: number,
    key2: string
}
type Eg2=Record<keyof A,B>
/*Partial,Readonly,Pick同态，其实现需要输入类型T拷贝属性，因此属性修饰符例如readonly,?:会被拷贝*/
type Eg=Pick<{readonly a?: string},'a'>
//keyof T 辅助拷贝传入类型的属性
//type Eg=<{readonly a?: string},'a'>
type Pick<T,K extends keyof T>={
    [P in K]:T[P]
}
/*在Pick中，P in keyof T,T为输入的类型，而keyof T则遍历了输入类型，而Record的实现中，并没有遍历输入的类型，K只是约束为keyof any的子类型*/