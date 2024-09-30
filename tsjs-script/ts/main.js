var fnItem = function (object) {
    return object;
};
var objectId = fnItem({ id: "itemFunc", histLogin: 202409240529 }).id;
var objectDate = fnItem({ id: "itemFunc", histLogin: 202409240529 }).histLogin;
console.log(objectDate);
