import dayjs from 'dayjs'
const companies = [
  {
    name: <span className='bold'>中科苏州地理科学与技术研究院</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2022-6-22").format("YYYY 年 MM月")}~ ${dayjs("2024-2-23").format("YYYY 年 MM月")}`}</span>,
    responsibilities: [
      <span>负责团队核心产品前端重构与研发, 进行项目排期, 技术选型, 制定重构策略, 并在预期内交付的同时解决遗留问题</span>,
      <span>负责研发组前端开发过程中业务hook与业务组件的封装实现, 推动团队React + 地图库(或任何第三方库)的最佳实践并且长期使用</span>,
      <span>带领团队完成前端工程化体系升级(webpack4-&gt;webpack5-&gt;vite), 同时通过优化代码分割配置提升整个APP加载速度, 使用Umi.js + qiankun完成前端子系统集成</span>,
      <span>完成前端核心业务逻辑模块js向ts的升级迁移</span>
    ]
  }
]
export default companies