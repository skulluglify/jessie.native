import * as loader from "./modules/assemblyscript/loader.js";
import { ReturnCode } from "./wrapper/std/utils.js";

export default function main(): number { // main

    fetch("./dist/index.wasm")
    .then((e: Response) => e.arrayBuffer())
    .then((buffer: ArrayBuffer) => loader.instantiate(buffer, {}))
    .then((instance: any) => {
    
        let module: any = instance.exports;
    
        globalThis.unspace = (context: string) => {
    
            return module.__getString(module.unspace(module.__newString(context)));
        };
    })
    .catch(err => {
    
        console.error(err);
    })

    return ReturnCode.EXIT_SUCCESS;
}
