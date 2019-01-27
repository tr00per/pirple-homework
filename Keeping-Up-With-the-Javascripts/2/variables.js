/*******************************************************************************
 * Homework Assignment #2: Variables and Constants
 * Student: Artur Czajka
 * What are differences between var, let & const? What is hoisting?
 ******************************************************************************/

/*
As for the differences, I'll start from "const" - this keyword starts definition
of a constant. Constants cannot be reassigned. This does not affect mutability
of the referenced entity, so an array can still be modified, but not a string.

Keyword "let" marks a block-scoped variable. It can be reassigned. They can't be
redeclared, but can be shadowed by "deeper-scoped" declaration. They behave
much like variables in other languages.

On the other hand "var" is a "legacy" declaration. Such variables can be
reassigned, the symbols can also be redeclared within the same level of scope.
Speaking of scope, they are function-scoped and hoisted, which means, that the
declaration of the "var" will be pulled to the beginning of the scope of the
current function.
*/

(function letAndVarWithinBlockScope() {
    console.log(z); // undefined, yet it "works", because of hoisting - it's declared

    let x = 1;
    // let x = -1; // impossible
    const y = 3;

    {
        let x = 2;
        z = 10; // looks out of place, but declaration will be hoisted

        console.log(x); // 2 - inner declaration hides the outer declaration
        console.log(y); // 3
        console.log(z); // 10

        var z = 11; // declaration will be hoisted
        var z = 12; // works
    }

    console.log(x); // 1 - inner declaration is out of scope
    console.log(y); // 3
    console.log(z); // 12, despite z being in a nested block

    // y = 30; // impossible
})();

(function varWithinFunctionScope() {
    // console.log(z); // doesn't work, z is not declared

    let x = 1;
    const y = 3;

    (function() {
        let x = 2;
        z = 10;

        console.log(x); // 2
        console.log(y); // 3
        console.log(z); // 10

        var z;
    })();

    console.log(x); // 1
    console.log(y); // 3
    // console.log(z); // z is undefined, inner scope is enclosed in a function
})();

(function reassignmentAndMutability() {
    let x = 1;
    console.log(x); // 1
    x = 2;
    console.log(x); // 2

    const y = [];
    console.log(y); // []
    // y = ["a"]; // impossible
    y.push("a"); // this works
    console.log(y); // ["a"]
})();
