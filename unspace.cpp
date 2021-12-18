#include<iostream>
#include<string>

#define LOG(x) std::cout << x << std::endl;

typedef int i32;
typedef unsigned char u8;
typedef unsigned int u32;
// typedef unsigned long long int u64;
typedef std::string str;

bool c_is_upper(char c) {

    i32 n = (i32)(c);
    return 65 <= n && n <= 90;
}

bool c_is_lower(char c) {

    i32 n = (i32)(c);
    return 97 <= n && n <= 122;
}

bool c_is_alphabet(char c) {

    i32 n = (i32)(c);
    if (65 <= n && n <= 90) return true;
    if (97 <= n && n <= 122) return true;
    return false;

}

char c_to_upper(char c) {

    i32 n = (i32)(c);
    return (97 <= n && n <= 122) ? (char)(n - 32) : c;
}

char c_to_lower(char c) {

    i32 n = (i32)(c);
    return (65 <= n && n <= 90) ? (char)(n + 32) : c;
}

str unspace_to_capitalize_each_word(str context) {

    u32 n;
    char r;
    char v;
    bool c;
    bool d;
    bool w;
    bool z;
    u32 s;
    str t;

    n = context.size(); // strlen(context)
    r = 0;
    v = 0;
    c = 1;
    d = 0;
    w = 0;
    z = 0;
    s = 0;
    t = "";

    for (u32 i = 0; i < n; i++) {

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

        if (!c) t += c_to_lower(v);
        else {
            t += c_to_upper(v);
            c = false;
        }

        c = !c_is_alphabet(v);
    }

    n = t.size();

    if (n > 0) {
        if (t[n - 1] == ' ') t.pop_back();
    }

    return t;
}

struct ChangeCase {

    struct Nothing {

        char bind(char c) {

            return c;
        }
    };

    struct UpperCase {

        char bind(char c) {

            return c_to_upper(c);
        }
    };

    struct LowerCase {

        char bind(char c) {

            return c_to_lower(c);
        }
    };
};

template<typename T>
str _unspace(str context) {

    T ct;

    u32 n;
    char r;
    char v;
    bool d;
    bool w;
    bool z;
    u32 s;
    str t;

    n = context.size(); // strlen(context)
    r = 0;
    v = 0;
    d = 0;
    w = 0;
    z = 0;
    s = 0;
    t = "";

    for (u32 i = 0; i < n; i++) {

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

    n = t.size();

    if (n > 0) {
        if (t[n - 1] == ' ') t.pop_back();
    }

    return t;
}

str unspace_to_upper(str context) {

    return _unspace<ChangeCase::UpperCase>(context);

}

str unspace_to_lower(str context) {

    return _unspace<ChangeCase::LowerCase>(context);

}

str unspace(str context) {

    return _unspace<ChangeCase::Nothing>(context);

}

int main(const i32 argc, const char** argv) {

    (void)argc;
    (void)argv;

    LOG(unspace_to_capitalize_each_word("            AHMAD   asy   syafiq") << " love love")
    LOG(unspace_to_capitalize_each_word("ahmad   asy syafiq            ") << " love love")
    LOG(unspace_to_capitalize_each_word("ahmad   asy syafiq                                                ") << " love love")
    LOG(unspace_to_capitalize_each_word("                ahmad asy   syafiq        ") << " love love")
    LOG(unspace_to_capitalize_each_word("                ahmad     asy syafiq                ") << " love love")
    LOG(unspace_to_capitalize_each_word("                ahmad asy     syafiq                ") << " love love")

    return EXIT_SUCCESS;
}
