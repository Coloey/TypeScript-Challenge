//Ts类型兼容的原因，string可以分配给string|number
type PickByValueExact<T,V>=Pick<T,
    TypeKeys<{[P in keyof T]: [T[P]] extends [V]}
    ? ([V] extends [T[P]] ? P : never)
    : never
    >
>
//type Eg={b:number}
type Eg1=PickByValueExact<{a:string,b:number},number>
type Eg2=PickByValueExact<{a:string,b:number,c:number|undefined},number>
//type Eg2={b:number,c:number|undefined}
/*给泛型套一层元组，规避extends的分发式联合类型的特性
  利用两个类型互相兼容的方式判断是否相同*/
//example
type Eq1<X,Y> = X extends Y ? true : false
type Eq2<X,Y> = [X] extends [Y] ? true : false 
type Eq3<X,Y>= [X] extends [Y] 
? ([Y] extends [X] ? true : false)
: false


