import { ProductPageContent } from "../product/ProductPageContent";

export async function clientLoader({params}) {
    const productId = params.productId;

    const res = await fetch(`http://localhost:3000/products/getbook`, {
        method: "POST",
        body: JSON.stringify({
            book_id: productId
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!res.ok)
        return {error: "Błąd podczas pobierania danych o produkcie."}
    else {
        let data = await res.json()
        return data
    }        
}

export default function Product({loaderData}) {
    return <ProductPageContent product={loaderData} />
}