import ContentDisplay from "@/components/content/ContentDisplay";
import { getDocumentsData } from "@/libs/doc";
import { getDocumentsByAuthor } from "@/uitils/docUtils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocumentsData();
  const matchedAuthorDocuments = getDocumentsByAuthor(docs, name);

  return <ContentDisplay id={matchedAuthorDocuments[0].id} />;
};

export default AuthorPage;
