// xfail: we don't support property descriptors at all for array elements.  also needs more from ECMA262 15.4.5.1

var a = [1, 2, 3, 4, 5];
Object.defineProperty(a, 5, { value: 6, configurable: false, writable: true, enumerable: true });
a[6] = 7;
a[7] = 8;
console.log(a);
a.length = 3;
console.log(a);
