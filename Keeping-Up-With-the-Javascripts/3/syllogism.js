/*******************************************************************************
 * Homework Assignment #3: If Statements and Operators
 * Student: Artur Czajka
 * Trying to translate philosophy into code...
 ******************************************************************************/

function assert(x, condition) {
    return condition(x) ? "OK" : "Fail"
}

Array.prototype.all = function(condition) {
    return this.reduce((acc, x) => acc && condition(x), true)
}

/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/
function Man(name) {
    this.name = name
    this.isMortal = true
}

const socrates = new Man("Socrates")
const men = [new Man("Joe Doe"), socrates, new Man("Murray")]

const allMenAreMortal = men.all(x => x.isMortal)
const socratesIsMan = socrates instanceof Man && men.indexOf(socrates) !== -1

if (allMenAreMortal && socratesIsMan) {
    console.log("Socrates is mortal:", assert(socrates.isMortal, x => x === true))
}

/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

const flavor = Object.freeze({"Vanilla" : "Vanilla", "Chocolate" : "Chocolate"})

const cake = {
    "flavor" : flavor.Vanilla
}

// either-or == xor - (p || q) && !(p && q)
if ((cake.flavor === flavor.Vanilla || cake.flavor === flavor.Chocolate) && !(cake.flavor === flavor.Vanilla && cake.flavor === flavor.Chocolate)) {
    if (cake.flavor !== flavor.Chocolate) {
        console.log("Cake is Vanilla:", assert(cake.flavor, x => x === flavor.Vanilla))
    }
}
