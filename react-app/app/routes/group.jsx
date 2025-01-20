import { GroupPageContent } from "../group/GroupPageContent";

export async function clientLoader({params}) {
    const groupId = params.groupId;

    const res = await fetch(`http://localhost:3000/groups/getgroup`, {
        method: "POST",
        body: JSON.stringify({
            group_id: groupId
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!res.ok)
        return {error: "Błąd podczas pobierania danych o grupie."}
    else {
        let data = await res.json()
        return data
    }
}

export default function Group({loaderData}) {
    return <GroupPageContent group={loaderData}/>
}