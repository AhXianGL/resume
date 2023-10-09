import './App.css';
import Block from './component/block';
import FirmBlock from './component/firmBlock';
import ExpBlock from './component/expBlock';
import cons from './contents/cons';
import firms from './contents/firms';
import education from './contents/education';
import experience from './contents/experience';
import TODOList from './contents/todos';
function App() {
  return (
    <div className="App">
      <header className='personal-info'>
        <div className='name'>孙硕鲜</div>
        <div className='info'>
          23岁 男 webgis/前端开发工程师 
        </div>
        <div className='email phone'>
          shuoxian.sun@gmail.com 17798983609
        </div>
      </header>
      <main>
        <Block
          blockClassName={"target-position"}
          title={"目标岗位"}>前端开发工程师, webgis前端开发工程师 期望薪资: 14k~16k</Block>
        <Block title={"个人优势"}>
          <ul style={{ margin: 0 }}>
            {cons.map((item, index) => {
              return <li>
                {item}
              </li>
            })}
          </ul>
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
              <div>GIS信息化工程师二级</div>
            </div>
          }
        </Block>
        <Block title={"TODO"}>
          {
            TODOList.map(todo=>{
              return todo
            })
          }
        </Block>
        {/* <Block title={""}></Block> */}
      </main>
    </div>
  );
}

export default App;
