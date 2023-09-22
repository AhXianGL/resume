import './App.css';
import Block from './component/block';
import FirmBlock from './component/firmBlock';
import cons from './contents/cons';
import firms from './contents/firms';
function App() {
  return (
    <div className="App">
      <header className='personal-info'>
        <div className='name'>孙硕鲜</div>
        <div className='info'>
          23岁 男 前端开发工程师 17798983609
        </div>
        <div className='email'>
          shuoxian.sun@gmail.com
        </div>
      </header>
      <main>
        <Block
          blockClassName={"target-position"}
          title={"目标岗位"}>前端开发工程师, webgis前端开发工程师</Block>
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

        </Block>
      </main>
    </div>
  );
}

export default App;
