"use server"

const addToCart = async(prevState: string, queryData: FormData) => {
    const itemID = queryData.get("itemID");

    console.log(itemID)

    if(itemID === "1"){
        return " Add to cart"
    }else if(itemID === "2"){
        return " Could not find"
    }else{
        return ""
    }
}

export { addToCart }