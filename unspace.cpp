#include<iostream>
#include<string>

#define LOG(x) std::cout << x << std::endl;

typedef int i32;
typedef unsigned char u8;
typedef unsigned int u32;
// typedef unsigned long long int u64;
typedef std::string str;

str unspace(str context) {

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

        t += v;
    }

    n = t.size();

    if (n > 0) {
        if (t[n - 1] == ' ') t.pop_back();
    }

    return t;
    
}

int main(const i32 argc, const char** argv) {

    (void)argc;
    (void)argv;

    LOG(unspace("	        ahmad   asy   syafiq") << " love love")
    LOG(unspace("ahmad   asy syafiq	        ") << " love love")
    LOG(unspace("ahmad   asy syafiq	  	              	        	        ") << " love love")
    LOG(unspace("		        ahmad asy   syafiq        ") << " love love")
    LOG(unspace("                ahmad     asy syafiq        		") << " love love")
    LOG(unspace("                ahmad asy     syafiq                ") << " love love")

    return EXIT_SUCCESS;
}
