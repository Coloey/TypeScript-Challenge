type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
//example
type Eg=MyReadonly<{
    key1: string,
    key2: number
}>