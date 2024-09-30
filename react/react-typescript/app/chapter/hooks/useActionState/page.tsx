"use client"
import { useFormState } from "react-dom";
import { addToCart } from "@/app/chapter/apis/server-apis/server-actions";
import { Button } from "@/components/ui/button";

interface AddToCartFormType {
    itemID: string;
    itemTitle: string;
}

const AddToCartForm = ({ itemID, itemTitle }: AddToCartFormType) => {
    const [message, formAction] = useFormState(addToCart, "");
    return (
        <form action={formAction}>
            <h2>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <Button type={"submit"}>Add to Cart</Button>
            {message}
        </form>
    )
}

const UasStudy = ({ }) => {
    return (
        <>
            <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
            <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
        </>
    )
}

export default UasStudy;