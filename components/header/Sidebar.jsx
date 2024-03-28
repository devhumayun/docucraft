"use client"
import { getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from "@/uitils/docUtils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ docs }) => {

    const pathname = usePathname()
    const [rootsNode, setRootsNode] = useState([])
    const [nonRootsGroup, setNonRootsGroup] = useState({})

    useEffect(() => {
        let matchedDocs = docs

        if (pathname.includes("/tags")) {
            const tag = pathname.split("/")[2]
            matchedDocs = getDocumentsByTag(docs, tag)
        } else if (pathname.includes("/category")) {
            const category = pathname.split("/")[2]
            matchedDocs = getDocumentsByCategory(docs, category)
        } else if (pathname.includes("/authors")) {
            const author = pathname.split("/")[2]
            matchedDocs = getDocumentsByAuthor(docs, author)
        }

        // root documention title
        const roots = matchedDocs.filter((doc) => !doc.parent)
        // sub root documention 
        const nonRoots = Object.groupBy(matchedDocs.filter((doc) => doc.parent), ({ parent }) => parent)

        const nonRootsKeys = Reflect.ownKeys(nonRoots)
        nonRootsKeys.forEach(key => {
            const foundInRoots = roots.find((root) => root.id === key)
            if (!foundInRoots) {
                const foundInDocs = docs.find((doc) => doc.id === key)
                roots.push(foundInDocs)
            }
        })

        roots.sort((a, b) => {
            if (a.roder < b.order) {
                return -1
            }
            if (a.order > b.order) {
                return 1
            }
            else {
                return 0
            }
        })

        setRootsNode([...roots])
        setNonRootsGroup({ ...nonRoots })

    }, [pathname])

    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-transparent">
                {
                    rootsNode.map((rootNode) => (
                        <li className="relative" key={rootNode.id}>
                            <Link href={`/docs/${rootNode.id}`} className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            ><span className="truncate">{rootNode.title}</span></Link>
                            {
                                nonRootsGroup[rootNode.id] && (
                                    <ul role="list" style={{ opacity: 1 }}>
                                        {
                                            nonRootsGroup[rootNode.id].map((subRoot) => (
                                                <li key={subRoot.id}>
                                                    <Link href={`/docs/${rootNode.id}/${subRoot.title}`} className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                    ><span className="truncate">{subRoot.id}</span></Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Sidebar
