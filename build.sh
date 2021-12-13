#! /usr/bin/env bash 
#g++ --std=gnu++17 -o unspace.o unspace.cpp && ./unspace.o
tsc --target esnext --module esnext --lib esnext,dom --allowJs true --checkJs true --outDir dist --sourceMap true --removeComments true --strict true index.ts
