const tuple = ['tesla','model 3','model X','model Y'] as const
const res: TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
}
//注意加上readonly,因为as const 会生成如下类型：const tuple: readonly['tesla','model 3','model X','model Y']