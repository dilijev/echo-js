// xfail: we don't properly handle deleting properties while iterating

var a = { hello: 1, world: 2 };
for (var k in a) delete a.world;
console.log(k);
