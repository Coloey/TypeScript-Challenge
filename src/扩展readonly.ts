/*数组，元素加上readonly为普通形式父集，对象属性的readonly不影响类型兼容*/
type A = [string]
type RA = Readonly<A>
type IsExtends<T,Y>=T extends Y ? true : false
type AExtendsRA = IsExtends<AbortController,RA>//true
type B = string[]
type RB = Readonly<B>
type BExtendsRA = IsExtends<B, RB> // true

type RBExtendsB = IsExtends<RB, B> // false

type C = {
  name: string
}
type RC = Readonly<C>
type CExtendsRC = IsExtends<C, RC> // true
type RCExtendsC = IsExtends<RC, C> // true 