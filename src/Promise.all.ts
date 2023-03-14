const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [K in keyof T]: Awaited<T[k]>
}>

//关于Awaited<>:https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#:~:text=TypeScript%204.5%20introduces%20a%20new%20utility%20type%20called,recursively%20unwrap%20Promise%20s.%20%2F%2F%20A%20%3D%20string
//example
type A = Awaited<Promise<string>>;//A=string
type B = Awaited<Promise<Promise<number>>>;//B = number
