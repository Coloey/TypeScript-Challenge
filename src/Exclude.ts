/*遍历T中的所有子类型，如果该子类型约束于U(存在于U，兼容于U)，则返回nerver类型，否则返回该子类型 */
type Exclude<T,U> = T extends U ? nerver : T
//example: type Eg = 'key1'
type Eg=Exclude<'key1'|'key2','key2'>
//nerver表示一个不存在的类型，与其他类型联合后，是没有nerver的