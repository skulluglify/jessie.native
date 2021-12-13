"use strict";

enum ReturnCode {

    EXIT_SUCCESS,
};

function unspace(context: string): string {

    let n: number;
    let r: string;
    let v: string;
    let d: boolean;
    let w: boolean;
    let z: boolean;
    let s: number;
    let t: string;

    n = context.length;
    r = "";
    v = "";
    d = false;
    w = false;
    z = false;
    s = 0;
    t = "";

    for (let i = 0; i < n; i++) {

        v = context[i];
        r = context[n - i - 1];

        if (r == ' ' || r == '\t') {

            if (!w) s++;
        }
        else w = true;
        
        if (!(i < (n - s))) break;

        if (v == ' ' || v == '\t') {
            
            if (!z) continue;
            if (!d) t += " ";
            d = true;
            continue;
        
        }

        z = true;
        d = false;

        t += v;
    }

    n = t.length;

    if (n > 0) {
        if (t[n - 1] == ' ') {
            let a: Array<string> = Array.from(t);
            a.pop(); // wrapper, just to get pop function
            t = a.join("");
        }
    }

    return t; 
}

function main(): number {

    let EXIT_SUCCESS: number = ReturnCode.EXIT_SUCCESS;

    console.log(unspace("	        ahmad   asy   syafiq") + " love love");
    console.log(unspace("ahmad   asy syafiq	        ") + " love love");
	console.log(unspace("ahmad   asy syafiq	  	              	        	        ") + " love love")
    console.log(unspace("		        ahmad asy   syafiq        ") + " love love");
    console.log(unspace("                ahmad     asy syafiq		        ") + " love love");
    console.log(unspace("                ahmad asy     syafiq                ") + " love love");

    return EXIT_SUCCESS;
}

main();
