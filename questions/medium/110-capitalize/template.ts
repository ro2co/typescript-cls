type MyCapitalize<S extends string> = S extends `${infer f}${infer s}` ? `${Uppercase<f>}${s}` : ""
