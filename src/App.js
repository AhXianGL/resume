import './App.css';
import Bold from './component/Bold';
import Block from './component/block';
import FirmBlock from './component/firmBlock';
import ExpBlock from './component/expBlock';
import cons from './contents/cons';
import firms from './contents/firms';
import education from './contents/education';
import experience from './contents/experience';
import Test from './component/test';
function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      <header className='personal-info'>
        <div className='name'><Bold>孙 硕 鲜</Bold></div>
        <div className='info'>
          25岁 男 全日制本科 前端开发工程师 三年经验
        </div>
        <div className='email phone'>
          <div>现居江苏苏州</div>
          <div>邮箱: <Bold>shuoxian.sun@gmail.com</Bold></div>
          <div>电话: <Bold>17798983609</Bold></div>
        </div>
      </header>
      <main>
        <Block
          blockClassName={"target-position"}
          title={"目标岗位"}>前端开发工程师</Block>
        <Block title={"个人能力概述"}>
          <ul style={{ margin: 0 }}>
            {cons.map((item, index) => {
              return <li>
                {item}
              </li>
            })}
          </ul>
        </Block>
        <Block title={"证书"}>
          {
            <ul>
              <li>工信部NCIE-GIS信息化工程师一级、二级</li>
            </ul>
          }
        </Block>
        {/* <Block title={"教育经历"}>
          <ul style={{ margin: 0 }}>
            {education.map((item, index) => {
              return <li>
                {item}
              </li>
            })}
          </ul>
        </Block> */}
        <Block
          title={"工作经历"}
        >
          <div>
            <div style={{fontSize: '14px'}}><Bold>从业以来所使用的前端技术栈:</Bold></div> 
            <ul>
              <li><div>[React | Vue3] + [Redux | Dva | Pinia] + [JS | TS] + [customize-cra | webpack | vite] + [Antd | Arco-Design ... ...]</div></li>
            </ul>
          </div>
          {
            firms.map(firm => {
              return <FirmBlock
                name={firm.name}
                timeRange={firm.timeRange}
                responsibilities={firm.responsibilities}
              >
              </FirmBlock>
            })
          }
        </Block>
        <Block
          title={"项目经验"}
        >
          
          {
            experience.map(exp => {
              return <ExpBlock
                highlight={exp.highlight}
                title={exp.title}
                contribution={exp.contribution}
              ></ExpBlock>
            })
          }
        </Block>

        
      </main>
    </div>
  );
}

export default App;
