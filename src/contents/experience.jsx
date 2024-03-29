const experience = [
    {
        title: <span className="title">一、影像数据生产任务监控、分发、管理系统-DMES(Data MES,数据生产MES系统)的<span>重构</span>和<span>更新</span>.<span>(重构经验)</span></span>,
        timeStamp: <span></span>,
        contribution: [
            <div>代码架构重整. 参与前端的基础设施的技术重选型,参与前端代码架构设计与实现.
                按照新版本代码架构重新封装API层代码,规范组件名称,将组件式路由调整为递归函数生成的配置式路由. </div>,
            <div>业务逻辑重新实现同时按照需求更新. </div>,
        ],

        highlight: [
            <div>
                <header>前端建立业务模型Model层</header>
                <div>物料(数据约束) 工序(数据处理单元) 工艺(数据生产约束和流程) 调试工艺(测试) 项目(生产) 入库(数据管理), 参考后端业务模型, 前端建立对应Modal层,与后端抽象保持一致,按照领导的要求将一些业务逻辑放在前端. </div>
            </div>,
            <div>
                <header>权限系统分权分域Model层</header>
                <div>
                    <div>前端建立Purview权限的数据模型(类),实现</div>
                    <div>1.原子权限值通过按位与(|)操作组合成业务逻辑权限(某特定业务操作的权限)</div>
                    <div>2.用户权限总值结合用户所在域与业务逻辑权限进行按位与(&)操作判断用户是否具有该业务权限</div>
                </div>
            </div>,
            <div>
                <header>动态的表单项,动态的校验规则</header>
                <div>
                    <div>二次封装Form.Item组件,根据JSON递归生成Form.Item</div>
                </div>
            </div>,
            <div>维护过程中,阅读AntV X6源码 优化由AntV X6编写的工艺流程图添加节点时的性能,理解其性能差距的来源,canvas模式与svg模式的不同,后续将X6升级为G6</div>,
            <div>
                根据客户要求进行定制开发时需求的变动很快,业务组件的可维护性至关重要,不停反思组件的封装思路,增强组件的可维护性,思考到底什么是真正"好的封装"
            </div>
        ]
    },

    {
        title: <span className="">二、地理大数据仓库管理平台,负责数据浏览模块. (微前端团队管理经验+业务经验)</span>,
        timeStamp: <span></span>,
        contribution: [
            <div>项目使用了umi + dva(umi自带的状态管理)精简项目配置过程. 团队采用微前端(qiankun)的开发模式,多个模块技术栈分离并独立开发,最终逐步集成. </div>,
            <div>负责实现类似windows资源管理器系统核心的交互需求, 用户'当前所在目录'这一状态决定整个视图的数据,这是实
                现目录和目录下文件列表的ui的数据驱动视图核心. </div>,
            <div>code review, 推动团队对react状态管理和函数时组件hooks最佳实践的探索和使用, 改善老旧代码质量</div>,
            <div>推动函数式组件在团队内部的使用, 催促团队成员React继续学习. </div>,
        ],
        highlight: [
            <div>业务方向: 帮助县级、市级、省级卫星应用中心的用户解决了矢量、遥感及描述文件或相关文档等空间大数据的管理、运转、出库入库效率低下,管理粗糙的问题. </div>,
            <div>研发模式: 使用微前端架构,提升了开发效率和集成效率,研发速度加快. </div>,
            <div>交互亮点: 数据浏览页面是文件目录+目录列表构成的 类似windows资源管理器的左右双栏布局,用户'当前所在目录'这一状态决定整个视图的数据,这是实现目录和目录下文件列表的ui的数据驱动视图核心. </div>
        ]
    },
    {
        title: <span className="">三、河海大学遥感影像检索、浏览、管理系统(业务经验)</span>,
        timeStamp: <span></span>,
        contribution: [],
        highlight: [
            <div>
                封装'数据驱动'风格的leaflet图层组件, 灵活运用react 组件的生命周期, 通过组件组合的方式实现图层增删与更新的操作, 完成(地图框架副作用)和react状态的同步
            </div>,
            <div>遥感影像数据模型(业务模型), 中类型tif数据或者其他传统遥感数据中的元数据(metaData)的理解和数据模型的封
                装, 定义MetaInfo 类, 并封装提取Bounds的方法(用于图层外接矩形高亮或者数据定位),还要配合后端接口的设计,封
                装一系列的'工具'方法.</div>,
        ]
    },
    {
        title: <span className="">四、北京市生态环境卫星应用中心影像生产、管理系统 + 数字化大屏(可视化经验)</span>,
        timeStamp: <span></span>,
        contribution: [
            <div>
                axios cancelToken结合递归调用setTimeout解决大屏统计长请求情况下的定时器逻辑导致ui更新异常的问题
            </div>,
            <div>
                在团队成员对echarts不熟悉并且ui休产假的情况下, 承担突破手的角色, 先分工, 最后整合的时候修复同事代码的bug, 在规定时间内推动项目完成, 项目验收期间赴北京生态卫星中心, 现场根据用户需求调整设计, 客户对开发效率很满意.
            </div>
        ],
        highlight: [
            <div>负责大屏实现时, Echarts第三方库和react库实践方式的探索.</div>,
            <div>用户需求一直不清晰, 多次重新设计, 敏捷开发, 在此过程中了解到了项目管理和团队建设的重要性. </div>
        ]
    },
]
export default experience