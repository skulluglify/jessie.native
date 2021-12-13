// unquote
// unspace
// unquote.split
enum ReturnCode {

    EXIT_SUCCESS,
};

class unquote extends Object {

    constructor() {

        super();
    }

    split(separator: string, limit?: number): string {

        return "";
    }
}

function unspace(value: string): string {

    let n: number;
    let r: string;
    let l: string;
    let w: boolean;
    let z: boolean;
    let s: number;
    let t: string;

    n = value.length;
    r = "";
    l = "";
    w = false;
    z = false;
    s = 0;
    t = "";

    for (let i = 0; i < n; i++) {

        l = value[i];
        r = value[n - i - 1];

        if (r.codePointAt(0) == 32 && !w) s++;
        else w = true;
        
        if (l.codePointAt(0) == 32 && !z) continue;
        else z = true;

        if (!(i < (n - s))) break;
        t += l;
    }

    return t; 
}

function main(): number {

    let EXIT_SUCCESS: number = ReturnCode.EXIT_SUCCESS;

    console.log(unspace("        ahmad asy syafiq") + " love love");
    console.log(unspace("ahmad asy syafiq        ") + " love love");
    console.log(unspace("        ahmad asy syafiq        ") + " love love");
    console.log(unspace("                ahmad asy syafiq        ") + " love love");
    console.log(unspace("                ahmad asy syafiq                ") + " love love");

    return EXIT_SUCCESS;
}

main();
