import { getDocumentContents } from "@/libs/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
    const content = await getDocumentContents(id)
    return (
        <article className="prose dark:prose-invert">
            <h1> {content.title} </h1>
            <div>
                <span>Published On: {content.date}</span> by {" "}
                <Link href={`/authors/${content.author}`}>
                    {content.author}
                </Link> {" "}
                under the{" "}
                <Link href={`/category/${content.category}`}>
                    {content.category}
                </Link>{" "}
                category.
            </div>
            <div>
                {
                    content.tags &&
                    content.tags.map((tag) => <Tag key={tag} tag={tag} />)
                }
            </div>
            <div
                className="lead"
                dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
        </article>
    )
}

export default ContentDisplay
