import ContentDisplay from "@/components/content/ContentDisplay";
import { getDocumentsData } from "@/libs/doc";
import { getDocumentsByTag } from "@/uitils/docUtils";

const TagsPage = ({ params: { name } }) => {
  const docs = getDocumentsData();

  const matchedDocuments = getDocumentsByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagsPage;
