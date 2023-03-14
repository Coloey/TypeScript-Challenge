对应任何类型T,keyof T的结果为该类型上索引公有属性key的联合
```js
interface Eg1 {
    name: string,
    readonly age: number
}
type T1=keyof Eg1//name|age
class Eg2{
    private name: string,
    public readonly age:number,
    protected home:string
}
//T2被约束为age,非公有属性不能被keyof获取
type T2=keyof Eg2
```
T[k]索引查询
```js
interface Eg1 {
    name:string,
    readonly age: number,
}
type V1=Eg1['name']//string
type V2=Eg1['name'|'age']//string | number
type V3=Eg1['name'|'age222']//any
type V4=Eg1[keyof Eg1]//strign | number
```
[]中的key有不存在于T中的，则是any
