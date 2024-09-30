interface itemType {
    id: string,
    histLogin: number
}


const fnItem = (object: itemType) => {
    return object
};

let objectId = fnItem({ id: "itemFunc", histLogin: 202409240529 }).id;
let objectDate = fnItem({ id: "itemFunc", histLogin: 202409240529 }).histLogin;

console.log('dist folder build test');



