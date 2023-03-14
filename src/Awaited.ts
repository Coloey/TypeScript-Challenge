type  X = Promise<string>
type Y = Promise<{ field: number }>
type ResultX = Transform<X>// string
type ResultY = Transform<Y> // { field: number}
type Transform<P> = P extends PromiseLike<infer F> 
                    ? F extends PromiseLike<any> 
                        ? Transform<F>
                        : F
                    : nerver
