export async function loader({params}) {
    const groupId = params.groupId;
    return {"groupId": groupId};
}
export async function action() {}

export default function Group({loaderData}) {
    return <>
        <p>Group {loaderData.groupId}</p>
    </>
}