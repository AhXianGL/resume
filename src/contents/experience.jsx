const experience = [
    {
        title: <span className="title">一、高标准农田监测监管系统+AI自然语言交互(AI流程引擎搭建经验)</span>,
        timeStamp: <span></span>,
        contribution: [
            
        ],

        highlight: [
            <div>
                AI: 使用dify编排业务流程, 实现用户通过自然语言的方式检索数据, 通过自然语言的方式控制页面交互
            </div>,
            <div>
                心态转变: 在需求不明确的情况下不封装或者适度封装, 否则会影响研发进度. 更希望把握全局进度, 不停留在某个点上纠结次要矛盾.
            </div>
        ]
    },
    {
        title: <span className="title">二、全场景物流机器人混合调度系统、物流机器人模拟系统(AGV, 智能仓储)</span>,
        timeStamp: <span></span>,
        contribution: [
            <div>代码架构重整. 参与前端的基础设施的技术重选型,参与前端代码架构设计与实现.
                按照新版本代码架构重新封装API层代码,规范组件名称,将组件式路由调整为递归函数生成的配置式路由. </div>,
            <div>业务逻辑重新实现同时按照需求更新. </div>,
        ],

        highlight: [
            <div>
                面向对象: 前端建立不同业务对象的DTO、VO, 业务操作高内聚、低耦合, 系统更能直观体现业务逻辑
            </div>,
            <div>
                显著提升性能: 将React、图形库Pixi.js、业务对象结合起来用数据驱动视图更新, 实现大量小车的流畅渲染
            </div>
        ]
    },
    {
        title: <span className="title">三、影像数据生产任务监控、分发、管理系统-DMES(Data MES,数据生产MES系统)的<span>重构</span>和<span>更新</span>.<span>(重构经验)</span></span>,
        timeStamp: <span></span>,
        contribution: [
            <div>代码架构重整. 参与前端的基础设施的技术重选型,参与前端代码架构设计与实现.
                按照新版本代码架构重新封装API层代码,规范组件名称,将组件式路由调整为递归函数生成的配置式路由. </div>,
            <div>业务逻辑重新实现同时按照需求更新. </div>,
        ],

        highlight: [
            <div>
                <header>前端也建立Model层</header>
                <div>物料(数据约束) 工序(数据处理单元) 工艺(数据生产约束和流程) 调试工艺(测试) 项目(生产) 入库(数据管理), 参考后端业务模型, 前端建立对应Modal层,与后端抽象保持一致,按照领导的要求将一些业务逻辑放在前端. </div>
            </div>,
            <div>
                <header>权限系统分权分域模型</header>
                <div>
                    <div>前端建立Purview权限的数据模型(类),实现</div>
                    <div style={{'marginLeft':'1.5rem'}}>1.原子权限值通过按位与(|)操作组合成业务逻辑权限(某特定业务操作的权限)</div>
                    <div style={{'marginLeft':'1.5rem'}}>2.用户权限总值结合用户所在域与业务逻辑权限进行按位与(&)操作判断用户是否具有该业务权限</div>
                </div>
            </div>,
            
            <div>
                根据客户要求进行定制开发时需求的变动很快,业务组件的可维护性至关重要,不停反思组件的封装思路,增强组件的可维护性,思考到底什么是真正"好的封装"
            </div>
        ]
    },

    {
        title: <span className="">四、地理大数据仓库管理平台,负责数据浏览模块. (微前端团队管理经验+业务经验)</span>,
        timeStamp: <span></span>,
        contribution: [
        ],
        highlight: [
            <div>业务方向: 帮助县级、市级、省级卫星应用中心的用户解决了矢量、遥感及描述文件或相关文档等空间大数据的管理、运转、出库入库效率低下,管理粗糙的问题. </div>,
            <div>研发模式: 使用微前端架构,提升了开发效率和集成效率,研发速度加快.推动code review, 推动团队对react状态管理和函数时组件hooks最佳实践的探索和使用, 改善老旧代码质量 </div>,
            <div>交互亮点: 数据浏览页面是文件目录+目录列表构成的 类似windows资源管理器的左右双栏布局,用户'当前所在目录'这一状态决定整个视图的数据,这是实现目录和目录下文件列表的ui的数据驱动视图核心. </div>
        ]
    },
    {
        title: <span className="">五、河海大学遥感影像检索、浏览、管理系统(业务经验)</span>,
        timeStamp: <span></span>,
        contribution: [],
        highlight: [
            <div>
                组件封装: '数据驱动'风格的leaflet图层组件, 灵活运用react 组件的生命周期, 通过组件组合的方式实现图层增删与更新的操作, 完成(地图框架副作用)和react状态的同步
            </div>,
            <div>空间数据模型: 根据空间数据中的元信息定义MetaInfo 类, 配合后端接口的设计,封装一系列空间属性计算的'工具'方法.</div>,
        ]
    },
    {
        title: <span className="">六、北京市生态环境卫星应用中心影像生产、管理系统 + 数字化大屏(可视化经验)</span>,
        timeStamp: <span></span>,
        contribution: [
            
        ],
        highlight: [
            <div>用户需求一直不清晰, 多次重新设计, 敏捷开发, 在此过程中了解到了产品经理的关键作用以及项目管理和团队建设的重要性. </div>
        ]
    },
]
export default experience