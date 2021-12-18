"use strict";

enum ReturnCode {

    EXIT_SUCCESS,
};

function is_string(c: any): boolean {

    if (typeof c == "string") {
        if (c.length > 0) return true;
    }
    return false;
}

function is_alphabet(c: string): boolean {

    if (is_string(c)) {
        let n: number;
        n = c.codePointAt(0) || 0;
        if (97 <= n && n <= 122) return true;
        if (65 <= n && n <= 90) return true;
    }
    return false;
}

function is_upper(c: string): boolean {

    if (is_string(c)) {
        let n: number;
        n = c.codePointAt(0) || 0;
        if (97 <= n && n <= 122) return true;
    }
    return false;
}

function char_to_upper(c: string): string {

    if (is_string(c)) {
        let n: number;
        n = c.codePointAt(0) || 0;
        if (97 <= n && n <= 122) return String.fromCodePoint(n - 32);
    }
    return c;
}

function is_lower(c: string): boolean {
    if (is_string(c)) {
        let n: number;
        n = c.codePointAt(0) || 0;
        if (65 <= n && n <= 90) return true;
    }
        return false;
}

function char_to_lower(c: string): string {

    if (is_string(c)) {
        let n: number;
        n = c.codePointAt(0) || 0;
        if (65 <= n && n <= 90) return String.fromCodePoint(n + 32);
    }
    return c;
}

function unspace_to_capitalize_each_word(context: string): string {

    let n: number;
    let r: string;
    let v: string;
    let c: boolean;
    let d: boolean;
    let w: boolean;
    let z: boolean;
    let s: number;
    let t: string;

    n = context.length;
    r = "";
    v = "";
    c = true;
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
            c = true;
            continue;
        
        }

        z = true;
        d = false;
        
        if (!c) t += char_to_lower(v);
        else {
            t += char_to_upper(v);
            c = false;
        }

        c = !is_alphabet(v);
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

function nothing(c: any): any {

    return c;
}

interface Binding {

    bind: Function,
};

namespace ChangeCase {
    export class Nothing implements Binding {
        bind = nothing;
    }
    export class UpperCase implements Binding {
        bind = char_to_upper;
    };
    export class LowerCase implements Binding {
        bind = char_to_lower;
    };
};

function _unspace(changeCase: any) {

    function wrapper(context: string): string {


        let ct: any;
        ct = new changeCase;

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

            t += ct.bind(v);
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

    return wrapper;
}

function unspace(context: string): string {

    return _unspace(ChangeCase.Nothing)(context);
}

function unspace_to_upper(context: string): string {

    return _unspace(ChangeCase.UpperCase)(context);
}

function unspace_to_lower(context: string): string {

    return _unspace(ChangeCase.LowerCase)(context);
}

function main(): number {

    let EXIT_SUCCESS: number = ReturnCode.EXIT_SUCCESS;

    console.log(unspace("            ahmad   asy   syafiq") + " love love");
    console.log(unspace("ahmad   asy syafiq            ") + " love love");
    console.log(unspace("ahmad   asy syafiq                                                ") + " love love")
    console.log(unspace("                ahmad asy   syafiq        ") + " love love");
    console.log(unspace("                ahmad     asy syafiq                ") + " love love");
    console.log(unspace("                ahmad asy     syafiq                ") + " love love");

    return EXIT_SUCCESS;
}

main();
