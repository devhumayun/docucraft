import ContentDisplay from "@/components/content/ContentDisplay";

const SubContentId = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default SubContentId;
