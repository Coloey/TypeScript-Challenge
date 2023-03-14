type TypeKeys<T> = T<keyof T>
type OmitByValue<T,V> = Omit<T,
    TypeKeys<{[P in keyof T] : T[P] extends V ? P : never}>
>

type OmitByValueExact<T,V> =Omit<T, 
    TypeKeys<{[P in keyof T]: [T[P]] extends [V] 
    ?([V] extends [T[P]] ? [T[P]] : never)
    : never
    }>