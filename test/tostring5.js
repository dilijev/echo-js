console.log("date");
console.log(Date.prototype.toString());
console.log("object date.proto.tostring");
try {
    console.log({ toString: Date.prototype.toString }.toString());
} catch (e) {
    console.log(e);
}
console.log("number");
console.log(Number.prototype.toString());
console.log("string");
console.log(String.prototype.toString());
console.log("boolean");
console.log(Boolean.prototype.toString());
console.log("regexp");
console.log(RegExp.prototype.toString());
