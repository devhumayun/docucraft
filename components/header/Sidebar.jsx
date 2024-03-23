import Link from "next/link";

const Sidebar = ({ docs }) => {

    // root documention title
    const roots = docs.filter((doc) => !doc.parent)
    // sub root documention 
    const nonRoots = Object.groupBy(docs.filter((doc) => doc.parent), ({ parent }) => parent)

    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-transparent">
                {
                    roots.map((rootNode) => (
                        <li className="relative" key={rootNode.id}>
                            <Link href={`/docs/${rootNode.id}`} className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            ><span className="truncate">{rootNode.title}</span></Link>
                            {
                                nonRoots[rootNode.id] && (
                                    <ul role="list" style={{ opacity: 1 }}>
                                        {
                                            nonRoots[rootNode.id].map((subRoot) => (
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
