import './App.css';
import Bold from './component/Bold';
import Block from './component/block';
import FirmBlock from './component/firmBlock';
import ExpBlock from './component/expBlock';
import cons from './contents/cons';
import firms from './contents/firms';
import education from './contents/education';
import experience from './contents/experience';
function App() {
  return (
    <div className="App">
      <header className='personal-info'>
        <div className='name'><Bold>孙 硕 鲜</Bold></div>
        <div className='info'>
          24岁 男 全日制本科 前端开发工程师
        </div>
        <div className='email phone'>
          <div>邮箱: <Bold>shuoxian.sun@gmail.com</Bold></div>
          <div>电话: <Bold>17798983609</Bold></div>
        </div>
      </header>
      <main>
        <Block
          blockClassName={"target-position"}
          title={"目标岗位"}>前端开发工程师 期望薪资: 14k~16k</Block>
        <Block title={"个人优势"}>
          <ul style={{ margin: 0 }}>
            {cons.map((item, index) => {
              return <li>
                {item}
              </li>
            })}
          </ul>
        </Block>
        
        <Block
          title={"工作经历"}
        >
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
            experience.map(exp=>{
              return <ExpBlock
                highlight={exp.highlight}
                title={exp.title}
                contribution={exp.contribution}
              ></ExpBlock>
            })
          }
        </Block>
        <Block title={"证书"}>
          {
            <div>
              <div>工信部GIS信息化工程师二级</div>
            </div>
          }
        </Block>
        <Block title={"教育经历"}>
          <ul style={{ margin: 0 }}>
            {education.map((item, index) => {
              return <li>
                {item}
              </li>
            })}
          </ul>
        </Block>
      </main>
    </div>
  );
}

export default App;
