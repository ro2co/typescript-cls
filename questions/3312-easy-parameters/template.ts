type MyParameters<T extends (...args: readonly any[]) => any> = T extends (...args: infer R) => any ? R: never

