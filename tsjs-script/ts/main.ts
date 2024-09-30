interface itemType {
    id: string,
    histLogin: number
}


const fnItem = (object: itemType) => {
    return object
};

fnItem({ id: "itemFunc", histLogin: 202409240529 }).id;




