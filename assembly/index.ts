export function unspace(context: string): string {

    let n: u32;
    let r: string;
    let v: string;
    let d: boolean;
    let w: boolean;
    let z: boolean;
    let s: u32;
    let t: string;

    n = context.length;
    r = "";
    v = "";
    d = false;
    w = false;
    z = false;
    s = 0;
    t = "";

    for (let i: u32 = 0; i < n; i++) {

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
        if (t[n - 1] == ' ') t = t.substring(0, n - 1); // alternative
    }

    return t; 
}
