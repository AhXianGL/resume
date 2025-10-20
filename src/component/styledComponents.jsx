import styled from "styled-components";

const Title = ({ className, title }) => {
  return <div className={className}>{title}</div>;
};
const TitleForFirm = ({ className, title, timeRange }) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <span>{timeRange}</span>
    </div>
  );
};

const BlockTitle = styled(Title)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;
const BlockContentWrapper = styled.div`
  padding-left: 32px;
  padding-right: 32px;
`;

const BlockSubItemWrapper = styled.div`
  margin-bottom: 12px;
`;

const BlockSubItemTitle = styled(Title)`
  font-size: 14px;
  font-weight: bold;
`;
const BlockSubItemTitleForFirm = styled(TitleForFirm)`
  font-size: 14px;
  font-weight: bold;
`;
const BlockSubItemContentWrapper = styled.div`
  padding-left: 28px;
`;

export {
  BlockSubItemTitle,
  BlockSubItemTitleForFirm,
  BlockTitle,
  BlockContentWrapper,
  BlockSubItemContentWrapper,
  BlockSubItemWrapper
};
