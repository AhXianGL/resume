import styled from "styled-components";
const IndentDiv = styled.div`
  padding-left: 2rem;
`;
const experience = [
  {
    title: (
      <span className="title">
        高标准农田监测监管系统+AI自然语言交互(AI智能交互)
      </span>
    ),
    timeStamp: <span></span>,
    content: [
      <div>
        AI智能交互开发
        <IndentDiv>
          针对市场大多同类产品的AI对话交互的局限性, 设计并实现了借助Dify快速验证自己“function call + 页面行为”的设计思路，转化到产品的用户通过自然语言的方式进行地图交互和业务操作, 根据大模型返回的Function
          Call, 定义好前端的交互行为模型,
          "业务模块"+"tools类型"+"用户权限"共同决定页面的智能交互行为
        </IndentDiv>
      </div>,
      <div>
        算法集成子系统开发
        <IndentDiv>
          数据资产管理 + 算法管理,
          使用可编辑表格实现算法调用方式和入参的灵活配置，实现了农业算法的快速集成和在线调用
          ;封装了大文件上传 hook, 实现了大文件的分片上传和断点续传.
        </IndentDiv>
      </div>,
      <div>
        后台管理系统开发
        <IndentDiv>
          改造 Vban Admin 后台管理框架,
          实现后台管理与业务应用模块一体化的产品需求,
          负责权限系统、用户系统、菜单系统、业务对象管理等基础模块的开发.
        </IndentDiv>
      </div>,
    ],
  },
  {
    title: <span className="title">物流机器人调度系统(AGV, 智能仓储)</span>,
    timeStamp: <span></span>,
    content: [
      <div>
        主导系统集成，搭建主仓库集成分研发中心的多个前端子模块
        <IndentDiv>
          为了解决不同研发团队权限控制问题并实现子模块的解耦和复用, 使用
          monorepo 的架构配合 git submodules 将不同模块分割成子仓库, 使用 vite
          lib模式构建子模块, 暴露子模块路由, 在主应用中集成.
        </IndentDiv>
      </div>,
      <div>
        面向对象在生产中的落地
        <IndentDiv>
          前端建立不同业务对象的DTO、VO, 业务操作高内聚、低耦合, 业务逻辑与 UI
          组件更加解耦，配合 react 空标签组件，将对象的创建和销毁与组件生命周期配合起来。
        </IndentDiv>
      </div>,
      <div>
        AGV仓储调度可视化
        <IndentDiv>
          在智能仓储调度系统中，采用面向对象思想整合 React、图形库 Pixi.js
          与物联网业务对象，构建数据驱动的视图更新机制，成功实现 50 + 台 AGV
          小车的实时流畅渲染，页面帧率稳定在 55fps 以上，调度指令响应延迟缩短至
          80ms 内。
        </IndentDiv>
      </div>,
    ],
  },
  {
    title: (
      <span className="title">
        影像数据生产MES系统的<span>重构</span>和<span>更新</span>.
        <span>(重构经验)</span>
      </span>
    ),
    timeStamp: <span></span>,

    content: [
      <div>
        通过代码分层管理逻辑复杂性
        <IndentDiv>
          前端建立了业务模型层,
          将流程图编排过程中的校验问题的复杂性,流程节点交互后数据联动的复杂性更好地组织起来,
          解决了命令式编程带来的代码难以维护, 迭代效率极低的问题.
        </IndentDiv>
      </div>,
      <div >
        构建工具升级与微前端系统集成
        <IndentDiv>
          为了将多个 webpack 的项目使用微前端(qiankun) 集成起来, 将 webpack3
          升级为 webpack5才能支持微前端集成, 同时精简了拆包配置, 显著提升了 dev
          环境下的热更新效率.
        </IndentDiv>
      </div>,
    ],
  },

  {
    title: (
      <span className="">
        地理大数据仓库管理平台,负责数据浏览模块. (微前端落地经验)
      </span>
    ),
    timeStamp: <span></span>,
    content: [
      <div>
        业务方向:
        <IndentDiv>
          帮助县级、市级、省级卫星应用中心的用户解决了矢量、遥感及描述文件或相关文档等空间大数据的管理、运转、出库入库效率低下,管理粗糙的问题.
        </IndentDiv>
      </div>,
      <div>
        微前端系统集成
        <IndentDiv>
          使用qiankun, 集成数据生产系统、数据检索系统、GIS 可视化子系统,
          快速实现“产、管、看”的一体化产品目标,
          缩减系统集成工期30%.使用发布订阅模式完成了系统之间状态的同步
        </IndentDiv>
      </div>,
    ],
  },
  {
    title: (
      <span className="">
        北京市卫星应用中心遥感影像检索、浏览、管理系统(业务经验)
      </span>
    ),
    timeStamp: <span></span>,
    content: [
      <div>
        封装基于 React 的数据驱动的地图组件
        <IndentDiv>
          灵活运用react组件的生命周期, 将图层的添加、移除、更新,
          封装到空标签组件的各个生命周期的hook中,
          实现地图图层增删与更新与react状态同步.
        </IndentDiv>
      </div>,
      <div>
        Echarts 地图可视化
        <IndentDiv>
          利用echarts实现 2.5D 地图可视化，同时实现了行政区划的上钻下钻效果。
        </IndentDiv>
      </div>,
    ],
  },
];
export default experience;
