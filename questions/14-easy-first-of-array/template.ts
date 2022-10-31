type First<T extends any[]> = T[0] extends never ? never: T[0]

