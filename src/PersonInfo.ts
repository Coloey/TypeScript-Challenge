//将类型为字面类型的转为基本类型
type PersonInfo = {name: 'Tom',age: 30}
//要求: Type PersonInfo = {name: string, age: number}
//解答：
type toPrimitive<T> = {
    [P in keyof T]: 
    T[P] extends string 
    ? string
    : T[P] extends number
        ? number
        :T[P] extends boolean
            ? boolean
            : toPrimitive<T[P]>
}