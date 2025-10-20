import classNames from "classnames";
import styled from "styled-components";
import { BlockTitle, BlockContentWrapper } from "./styledComponents.jsx";
const MainBlockWrapper = styled.div`
  margin-bottom: 32px;
`;

export default function MainBlock({ blockClassName, title, ...props }) {
  let blockClass = classNames("block", {
    [`${blockClassName}`]: Boolean(blockClassName),
  });
  return (
    <MainBlockWrapper className={blockClass}>
      <BlockTitle className="title" title={title} />
      <BlockContentWrapper>{props.children}</BlockContentWrapper>
    </MainBlockWrapper>
  );
}
