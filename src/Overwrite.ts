//从T中提取存在于U中的key和对应的类型
type Intersection<T extends object,U extends object>=Pick<T,
    Extract<keyof T,keyof U> & Extract<keyof U,keyof T>
>
type Eg=Intersection<{key1: string},{key1: string,key2:number}>
/*利用Pick提取指定的key组成的类型，通过Extract<keyof T,keyof U>提取同时存在于T和U中的key,
Extract<keyof U,keyof T>同理,做两次Extract然后再交叉类型的原因在于处理类型的兼容推导问题*/
//Diff<T,U>从T中排除存在于U中的key和类型
type Diff<T extends object,U extends object> = Pick<
    T,Exclude<keyof T,keyof U>
>
type Overwrite<
    T extends object,
    U extends object,
    I = Diff<T,U> & Intersection<T,U>
> = Pick<I,keyof I>
/*Diff<T,U>先获取存在于T不存在于U中的key和其类型, 
Intersection<U,T>从U中提取存在于T中的key和类型，即后者同名key和类型，在进行交叉合并*/

type Assign<
    T extends object,
    U extends object,
    I = Diff<T,U> &U
> = Pick<IDBCursor,keyof I>
