import ContentDisplay from "@/components/content/ContentDisplay";
import { getDocumentsData } from "@/libs/doc";
import { getDocumentsByCategory } from "@/uitils/docUtils";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocumentsData();
  const matchedDocuments = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default CategoryPage;
