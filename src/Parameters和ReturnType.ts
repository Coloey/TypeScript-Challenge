//Parameters获取函数参数类型，将每个参数类型放在一个元组
type Parameters<T extends Function> = T extends (...args: infer P)=>any ? P : never;
//example
type Eg = Parameters<(arg1:string,arg2:number) => void>
//type Eg=[arg1:string,arg2:number]
/*Parameters约束参数T必须是个函数类型，具体实现就是判断T是否是函数类型，是就是要infer P让ts自己推到出函数的参数类型，并将推导结果存到类型P，否则
返回never*/
//ReturnType获取函数的返回值类型
type ReturnType<T extends Function> = T extends (...args: any)=> infer R ? R : never