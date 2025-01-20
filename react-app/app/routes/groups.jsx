import { GroupsContentPage } from "../groups-search/GroupsContentPage"
import { useState, useEffect } from "react"

// export async function loader() {}
// export async function action() {}

export default function Groups() {
    const [name, setName] = useState('')
    
    useEffect(() => {
        const url = new URL(window.location.href)
        setName(url.searchParams.get('name') == null ? '' : url.searchParams.get('name'))
    })

    return <GroupsContentPage name={name} />
}