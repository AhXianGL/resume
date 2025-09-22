const experience = [
  {
    title: (
      <span className="title">
        一、高标准农田监测监管系统+AI自然语言交互(AI流程引擎搭建经验)
      </span>
    ),
    timeStamp: <span></span>,
    highlight: [
      <div>
        AI智能交互开发: 用户通过自然语言的方式进行地图交互和业务操作,
        根据大模型返回的Function Call, 定义好前端的交互行为模型,
        "业务模块"+"tools类型"+"用户权限"共同决定页面的智能交互行为
      </div>,
      <div>
        算法集成系统: 数据资产管理+算法管理, 实现了农业算法的集成和在线调用,
        封装了大文件上传 hook, 实现了大文件的分片上传和断点续传.
      </div>,
      <div>
        心态转变: 更希望把握全局进度,
        不停留在某个点上纠结次要矛盾.在需求不明确的情况下不封装或者适度封装,
        否则会影响研发进度.
      </div>,
    ],
  },
  {
    title: <span className="title">二、物流机器人调度系统(AGV, 智能仓储)</span>,
    timeStamp: <span></span>,
    highlight: [
      <div>
        系统集成: 为了解决不同研发团队权限控制问题并实现子模块的解耦和复用, 使用
        monorepo 的架构配合 git submodules 将不同模块分割成子仓库, 使用 vite
        lib模式构建子模块, 在主应用中集成.
      </div>,
      <div>
        面向对象: 前端建立不同业务对象的DTO、VO, 业务操作高内聚、低耦合,
        业务逻辑与 UI 组件更加解耦.
      </div>,
      <div>
        显著提升性能:
        将React、图形库Pixi.js、业务对象结合起来用数据驱动视图更新,
        实现大量小车的流畅渲染.
      </div>,
    ],
  },
  {
    title: (
      <span className="title">
        三、影像数据生产任务监控、分发、管理系统-DMES(Data
        MES,数据生产MES系统)的<span>重构</span>和<span>更新</span>.
        <span>(重构经验)</span>
      </span>
    ),
    timeStamp: <span></span>,

    highlight: [
      <div>
        前端建立Model层: 前端建立了业务模型层,
        将流程图编排过程中的校验问题的复杂性,流程节点交互后数据联动的复杂性更好地组织起来,
        解决了命令式编程带来的代码难以维护, 迭代效率极低的问题.
      </div>,
      <div>
        微前端系统集成: 为了将多个 webpack 的项目使用微前端(qiankun) 集成起来,
        将 webpack3 升级为 webpack5才能支持微前端集成, 同时精简了拆包配置,
        显著提升了 dev 环境下的热更新效率.
      </div>,
    ],
  },

  {
    title: (
      <span className="">
        四、地理大数据仓库管理平台,负责数据浏览模块. (微前端集成经验)
      </span>
    ),
    timeStamp: <span></span>,
    contribution: [],
    highlight: [
      <div>
        业务方向:
        帮助县级、市级、省级卫星应用中心的用户解决了矢量、遥感及描述文件或相关文档等空间大数据的管理、运转、出库入库效率低下,管理粗糙的问题.
      </div>,
      <div>
        研发模式: 使用微前端架构,提升了开发效率和集成效率.推动code review,
        推动团队对react状态管理和函数时组件hooks最佳实践的探索和使用,
        改善老旧代码质量
      </div>,
      <div>
        交互亮点:
        数据浏览页面是文件目录+目录列表构成的类似windows资源管理器的左右双栏布局,用户'当前所在目录'这一状态决定整个视图的数据,这是实现目录和目录下文件列表的ui的数据驱动视图核心.
      </div>,
    ],
  },
  {
    title: (
      <span className="">
        五、河海大学遥感影像检索、浏览、管理系统(业务经验)
      </span>
    ),
    timeStamp: <span></span>,
    contribution: [],
    highlight: [
      <div>
        组件封装: 封装'数据驱动'风格的leaflet图层组件,
        灵活运用react组件的生命周期, 通过组件组合的方式实现图层增删与更新的操作,
        完成地图的状态和交互与react状态的同步
      </div>,
      <div>
        空间数据模型的建立: 根据空间数据中的元信息定义MetaInfo
        类,配合后端接口的设计,封装一系列空间属性计算的'工具'方法.
      </div>,
    ],
  },
  {
    title: (
      <span className="">
        六、北京市生态环境卫星应用中心影像生产、管理系统 +
        echarts数字化大屏(可视化经验)
      </span>
    ),
    timeStamp: <span></span>,
    contribution: [],
    highlight: [
      <div>
        利用echarts实现 2.5D 的地图可视化效果, 同时实现了行政区划的上钻下钻.
      </div>,
      <div>
        用户需求一直不清晰, 多次重新设计, 敏捷开发,
        在此过程中了解到了产品经理的关键作用以及项目管理和团队建设的重要性.
      </div>,
    ],
  },
];
export default experience;
