import ContentDisplay from "@/components/content/ContentDisplay";

const ContentId = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default ContentId;
