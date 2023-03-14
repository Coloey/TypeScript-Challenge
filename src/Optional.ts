//OptionalKeys提取T中所有可选类型的key组成的联合类型
/*用映射类型遍历所有key，通过Pick<T,P>提取当前key和类型，利用同态拷贝会拷贝可选修饰符的特性，利用{}extends {当前key:类型} 判断是否是可选类型*/
type OptionalKeys<T> = {
    [P in keyof T]: {} extends Pick<T,P> ? P : nerver
}[keyof T]

type Eg = OptionalKeys<{key1?: string, key2: number}>
//{key1?:string}
//利用{}extends {当前key:类型} 判断是否是可选类型,{}和只包含可选参数类型{key1?:string}是兼容这一特性，extends前面的{}替换为object也可以
type Eg2={} extends {key1:string} ? true : false //false
type Eg3={} extends {key1?:string} ? true : false //true