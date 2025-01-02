export async function loader({params}) {
    const productId = params.productId;
    return {"productId": productId};
}
export async function action() {}

export default function Product({loaderData}) {
    return <>
        <p>Product {loaderData.productId}</p>
    </>
}