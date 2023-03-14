//提取联合类型T和U的交集
type Extract<T,U> = T extends U ? T : never
