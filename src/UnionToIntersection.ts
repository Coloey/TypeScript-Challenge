//将联合类型转变为交叉类型
type UnionToIntersection<T> =(T extends any
    ? (arg: T) => void
    : never
  )extends (arg: infer U) => void ? U : never
  /*T extends any ? (arg: T) => void : never一定走true分支，构造一个逆变的联合类型
  (arg1: T1)=>void | (arg2: T2)=>void | (arg3: T3)=>void
  再利用第二个extends配合infer推导得到U的类型，利用infer对协变类型的特性得到交叉类型*/
type Eg = UnionToIntersection<{key1:string} |{key2: number}> 
