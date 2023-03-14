type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
interface Todo{
    title: string
    description: string
    completed: boolean
}
type A=MyPick<Todo,'title'| 'completed'>