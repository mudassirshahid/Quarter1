<!-- To convert ts file into js -->

tsc filename

<!-- Run File -->

node filename.js

<!-- To compile and run file -->

tsc main.ts && node main.js

<!-- To create TS config file -->

tsc --init

<!-- When you create ts config file then the error we face like when main.js file open our main.ts shows error of let and var -->

<!-- Compile file only once -->

tsc -w

<!-- To create package.json file  -->

npm init --yes

<!-- Update TS version to latest -->
<!-- Changes in tsconfig file -->
/* Language and Environment */
    "target": "Es2022", 
/* Modules */
    "module": "NodeNext", 
    "moduleResolution": "NodeNext", 

<!-- Changes in package.json file -->

replace type common to module

"type": "module",