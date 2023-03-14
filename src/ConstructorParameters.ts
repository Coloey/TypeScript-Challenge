//ConstructorParameters可以获取类的构造函数的参数类型，存在一个元组中
//用infer进行推导
type ConstructorParameters<T extends abstract new (...args:any)=>any>=T extends abstract new (...args:infer P) =>any ? P : never
/**
 * @example
 * type Eg = string;
 */
interface ErrorConstructor {
new(message?: string): Error;
(message?: string): Error;
readonly prototype: Error;
}
type Eg = ConstructorParameters<ErrorConstructor>;

/**
 * @example
 * type Eg2 = [name: string, sex?: number];
 */
class People {
constructor(public name: string, sex?: number) {}
}
type Eg2 = ConstructorParameters<typeof People>
//T约束为抽象类：既可以赋值为抽象类，也可以赋值为普通类
/*使用typeof 类作为类型和使用类作为类型的区别:
当把类直接作为类型，该类型约束的必须是类的实例，即该类型获取的是该类上的实例属性和实例方法
当把typeof 类作为类型，约束的满足该类的类型，该类型获取的是该类上的静态属性和方法
*/
//example
class People {
    name: string;
    age: number;
    constructor()
}
//p1可以正常赋值
const p1: People = new People()
//等号后的People报错
const p2: People =People
//p3报错，类型People中缺少属性'prototype'，但类型"typeof People中需要该属性
const p3: typeof People = new People()
const p4: typeof People = People