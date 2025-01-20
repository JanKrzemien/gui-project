import { useState, useEffect } from 'react'
import { ProductsContentPage } from '../products-search/ProductsContentPage'

// export async function loader() {}
// export async function action() {}

export default function Products() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [otherSearch, setOtherSearch] = useState('')
    
    useEffect(() => {
        const url = new URL(window.location.href)
        setTitle(url.searchParams.get('title') == null ? '' : url.searchParams.get('title'))
        setAuthor(url.searchParams.get('author') == null ? '' : url.searchParams.get('author'))
        setOtherSearch(url.searchParams.get('search') == null ? '' : url.searchParams.get('search'))
    })

    return <ProductsContentPage title={title} author={author} otherSearch={otherSearch} />
}