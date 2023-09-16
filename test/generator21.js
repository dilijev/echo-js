// generator: babel-node
// xfail: generator support isn't 100%

// "computed shorthand generators, classes"

var garply = "generator";
class C {
    *[garply]() {
        yield 5;
        yield 6;
    }
}
var iterator = new C().generator();
var item = iterator.next();
var passed = item.value === 5 && item.done === false;
item = iterator.next();
passed &= item.value === 6 && item.done === false;
item = iterator.next();
passed &= item.value === undefined && item.done === true;
console.log(passed);
