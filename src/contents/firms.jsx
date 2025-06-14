import dayjs from 'dayjs'
const companies = [
  {
    name: <span className='bold'>中国农业科学院华东中心(苏州中农数智科技有限公司)</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2024-5-1").format("YYYY 年 MM月")} ~ 至今`}</span>,
    responsibilities: [
      <span>岗位职责: 高级前端开发, 兼副组长, 辅助识别项目风险点, 辅助产品设计</span>,
      <span>AI流程编排和使用: 负责私有化部署Dify AI并且编排业务智能体, 实现了Web + AI的自然语言的交互方式</span>,
      <span>开发工作: 主要承担物联网设备控制和地图相关交互的开发, 同时维护公共组件</span>,
      <span>DevOps: 熟练使用docker、docker compose 推行了软件制品和服务的容器化, 同时积累了一些shell脚本降低了部署和维护的时间成本; 熟练使用JumpServer搭建堡垒机, 熟练使用NPS进行内网穿透</span>,
    ]
  },
  {
    name: <span className='bold'>苏州牧星智能科技有限公司</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2024-3-1").format("YYYY 年 MM月")}~ ${dayjs("2024-5-1").format("YYYY 年 MM月")}`}</span>,
    responsibilities: [
      <span>岗位职责: 高级前端开发, 推进多子模块之间使用monorepo的模式进行协同开发与系统集成</span>,
      <span>开发工作: 前端建立货架、货列、AGV小车等业务模型对应的Entity、VO、DTO, 使用面向对象的方式将React、图形库Pixi.js、业务对象结合起来用数据驱动视图更新, 实现大量小车的流畅渲染</span>,
    ]
  },
  {
    name: <span className='bold'>中科苏州地理科学与技术研究院(中科天启)</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2022-6-22").format("YYYY 年 MM月")}~ ${dayjs("2024-2-23").format("YYYY 年 MM月")}`}</span>,
    responsibilities: [
      <span>辅助核心产品前端重构与研发, 参与项目排期, 技术选型, 制定重构策略, 并在预期内交付的同时解决遗留问题</span>,
      <span>负责前端开发过程中业务hook与业务组件的封装实现, 推动团队React + 地图库(或任何第三方库)的最佳实践并且长期使用</span>,
      <span>主导完成前端工程化体系升级(webpack4-&gt;webpack5-&gt;vite), 同时通过优化代码分割配置提升整个APP加载速度, 使用Umi.js + qiankun完成前端子系统集成</span>,
      <span>完成前端核心业务逻辑模块js向ts的升级迁移</span>
    ]
  }
]
export default companies