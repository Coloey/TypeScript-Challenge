//SymmetricDifference<T,U>获取没有同时存在于T和U内的类型
type SymmetricDifference<T,U>=Exclude<T|U,T&U>
//example:type Eg ='1' | '4'
type Eg = SymmetricDifference<'1'|'2'|'3','2'|'3'|'4'>