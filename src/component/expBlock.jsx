import {
  BlockSubItemWrapper,
  BlockSubItemTitle,
  BlockSubItemContentWrapper,
} from "./styledComponents";
export default function ExpBlock({ title, timeStamp, content }) {
  return (
    <BlockSubItemWrapper>
      <BlockSubItemTitle title={title}></BlockSubItemTitle>
      <BlockSubItemContentWrapper>
        {content.map((item) => (
          <div style={{ marginBottom: "8px" }}>{item}</div>
        ))}
      </BlockSubItemContentWrapper>
    </BlockSubItemWrapper>
  );
}
