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
            <li><Bold>前端开发能力</Bold>: 熟练使用<Bold>TypeScript</Bold>, 能熟练使用<Bold>React, Vue3</Bold>, 通读 <Bold>CSS Specification</Bold>, 熟练使用<Bold>Tailwind CSS</Bold>. 了解函数式编程思想, 熟练把握页面状态管理, 熟练使用类似<Bold>Redux</Bold>,<Bold>Pinia</Bold>等状态管理库.</li>
            <li><Bold>框架与工程化</Bold>: 有<Bold>pnpm+monorepo</Bold>的工程化经验, 熟练掌握<Bold>单点登录,权限控制等常见系统基础通用模块</Bold>的前端配合方式, 有<Bold>qiankun微前端子系统集成经验</Bold>, 熟练使用<Bold>Vite, webpack</Bold>.熟练使用<Bold>Ant Design, Arco Design</Bold>组件库.</li>
            <li><Bold>AI智能体与业务融合</Bold>: 具备<Bold>Dify AI智能体</Bold>编排和私有化部署经验，并已在生产中使用. 有<Bold>AI+Web协作交互的实现经验</Bold>.</li>
            <li><Bold>WebGIS开发能力</Bold>: 熟练使用<Bold>leaflet, openlayer</Bold>, 熟练使用<Bold>geoserver</Bold>根据数据库表或文件发布地图服务, 熟练配置sld样式.</li>
            <li><Bold>DevOps与自动化能力</Bold>: 熟练使用<Bold>Docker, docker compose</Bold>, 有阿里云效,腾讯coding平台<Bold>CI/CD</Bold> 流程搭建经验</li>
            <li><Bold>行业经验与团队协作</Bold>: 具备一定的ToG和ToB业务经验, 热爱沟通, 喜欢开放合作的工作环境</li>
          </ul>
        </Block>
        <Block title={"证书"}>
          {
            <ul>
              <li>工信部NCIE-GIS信息化工程师一级, 二级</li>
            </ul>
          }
        </Block>
        <Block
          title={"工作经历"}
        >
          <div>
            <div style={{fontSize: '14px'}}><Bold>从业以来所使用的前端技术栈:</Bold></div> 
            <ul>
              <li><div>[React | Vue3] + [Redux | Dva | Pinia] + [JS | TS] + [vite | customize-cra | webpack] + [Antd | Arco-Design ... ...]</div></li>
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
