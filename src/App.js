import "./App.css";
import Bold from "./component/Bold";
import Block from "./component/block";
import FirmBlock from "./component/firmBlock";
import ExpBlock from "./component/expBlock";
import firms from "./contents/firms";
import experience from "./contents/experience";
import cons from "./contents/cons";
function App() {
  return (
    <div className="App">
      <header className="personal-info">
        <div className="name">
          <Bold>孙 硕 鲜</Bold>
        </div>
        <div className="info">25岁 男 全日制本科 前端开发工程师 三年经验</div>
        <div className="email phone">
          <div>江苏苏州</div>
          <div>
            邮箱: <Bold>shuoxian.sun@gmail.com</Bold>
          </div>
          <div>
            电话: <Bold>17798983609</Bold>
          </div>
        </div>
      </header>
      <main>
        <Block blockClassName={"target-position"} title={"目标岗位"}>
          前端开发工程师
        </Block>
        <Block title={"能力概述"}>
          <ul style={{ margin: 0 }}>
            {cons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Block>
        <Block title={"专业证书"}>
          {
            <ul>
              <li>工信部NCIE-GIS信息化工程师一级, 二级</li>
            </ul>
          }
        </Block>
        <Block title={"工作经历"}>
          <div>
            <div style={{ fontSize: "14px" }}>
              <Bold>从业以来所使用的技术栈:</Bold>
            </div>
            <div>
              <ul>
                <li>
                  <div>
                    TS+ Vite + Vue3 + Pinia + [Tailwind,scss] + [Arco Design
                    Vue, Ant Design Vue, shadcn vue]
                  </div>
                </li>
                <li>
                  <div>
                    TS+ Vite + React + [Dva,tanstack] + [Tailwind,scss] + [Ant
                    Design Vue, Shadcn ui]
                  </div>
                </li>
                <li>
                  <div>Vue3、Vben Admin、Ruoyi Admin 脚手架及二次开发</div>
                </li>
              </ul>
            </div>
          </div>
          {firms.map((firm) => {
            return (
              <FirmBlock
                name={firm.name}
                timeRange={firm.timeRange}
                content={firm.content}
              ></FirmBlock>
            );
          })}
        </Block>
        <Block title={"项目经验"}>
          {experience.map((exp) => {
            return (
              <ExpBlock highlight={exp.highlight} title={exp.title}></ExpBlock>
            );
          })}
        </Block>
      </main>
    </div>
  );
}

export default App;
