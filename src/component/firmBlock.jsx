import {
  BlockSubItemTitleForFirm,
  BlockSubItemContentWrapper,
  BlockSubItemWrapper
} from "./styledComponents";
export default function FirmBlock({ name, timeRange, content }) {
  return (
    <BlockSubItemWrapper>
      <BlockSubItemTitleForFirm title={name} timeRange={timeRange} className="title" />
      <BlockSubItemContentWrapper className="description">
        {content.map((item) => {
          return <div style={{ marginBottom: "8px" }}>{item}</div>;
        })}
      </BlockSubItemContentWrapper>
    </BlockSubItemWrapper>
  );
}
