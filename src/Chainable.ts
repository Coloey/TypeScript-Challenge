declare const config: Chainable
const result = config
    .option('foo', 123)
    .option('name', 'apple')
    .option('bar', { value: 'hello'})
    .get()
//expect the type of result
interface Result {
    foo: number,
    name: string,
    bar: {
        value: string
    }
}
type Chainable<T extends Record<string, any[]> = {
    option<K extends string, V extends any>(key: K,value: V): Chainable<Omit<T,K> & Record<K, V>>,
    get(): T
}