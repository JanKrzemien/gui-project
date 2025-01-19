import { ProductPageContent } from "../product/ProductPageContent";

const image = (pictureBase64) => {
    const byteCharacters = atob(pictureBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));
  }

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
        if(data.productPicture != 'default')
            data.productPicture = image(data.productPicture)
        return data
    }        
}

export default function Product({loaderData}) {
    return <ProductPageContent product={loaderData} />
}