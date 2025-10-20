import "./App.css";
import Bold from "./component/Bold";
import MainBlock from "./component/MainBlock";
import FirmBlock from "./component/firmBlock";
import ExpBlock from "./component/expBlock";
import firms from "./contents/firms";
import experience from "./contents/experience";
import cons from "./contents/cons";
import styled from "styled-components";
import {
  BlockSubItemTitle,
  BlockSubItemContentWrapper,
  BlockSubItemWrapper,
} from "./component/styledComponents";
const PersonalInfo = styled.header`
  font-size: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #000;
  margin: 16px 0px 16px 0px;
`;

function App() {
  return (
    <div className="App">
      <PersonalInfo>
        <div className="name-bar">
          <div className="name" style={{ fontSize: "24px" }}>
            <Bold>孙 硕 鲜</Bold>
          </div>
          <div className="name" style={{ fontSize: "24px" }}>
            <Bold>前端开发工程师</Bold>
          </div>
        </div>
        <div className="info">
          基本信息:&nbsp; 25 岁 男 全日制本科 地理信息科学(GIS)专业
        </div>
        <div>个人现况:&nbsp; 3 年经验前端开发工程师 14k x 14薪, 昆山工作-定居苏州-在职(2 周内到岗)</div>
        <div class="info-row">
          <div class="info-label">联系方式：</div>
          <div class="contact-group">
            <div class="contact-item">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3498DB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>17798983609</div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3498DB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>shuoxian.sun@gmail.com</div>
            </div>
          </div>
        </div>
      </PersonalInfo>
      <Divider></Divider>
      <main>
        <MainBlock title={"能力概述"}>
          {cons.map((item, index) => (
            <BlockSubItemWrapper key={index}>{item}</BlockSubItemWrapper>
          ))}
        </MainBlock>
        <MainBlock title={"工作经历"}>
          {firms.map((firm) => {
            return (
              <FirmBlock
                name={firm.name}
                timeRange={firm.timeRange}
                content={firm.content}
              ></FirmBlock>
            );
          })}
        </MainBlock>
        <MainBlock title={"项目经验"}>
          {experience.map((exp) => {
            return (
              <ExpBlock content={exp.content} title={exp.title}></ExpBlock>
            );
          })}
        </MainBlock>
      </main>
    </div>
  );
}

export default App;
