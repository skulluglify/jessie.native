#! /usr/bin/env bash 
rm -rvf dist/*
#g++ --std=gnu++17 -o unspace.o unspace.cpp && ./unspace.o
asc --optimizeLevel 3 --shrinkLevel z --converge --noAssert --binaryFile dist/index.wasm --exportRuntime --enable nontrapping-f2i,bulk-memory,simd,threads,reference-types,gc --pedantic assembly/index.ts
tsc --target es2015 --module es2015 --lib es2015,dom --allowJs true --checkJs true --outDir dist --sourceMap true --removeComments true --strict true index.ts
