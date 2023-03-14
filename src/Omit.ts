//Omit<T,K>从类型T中剔除K中的所有属性
//用Pick实现
type Omit = Pick<T,Exclude<keyof T,K>>
//利用映射类型
type Omit2<T,K extends keyof any> = {
    [P in Exclude<keyof T,K>]:T[P]
}