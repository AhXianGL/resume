import dayjs from 'dayjs'
const companies = [
  {
    name: <span className='bold'>中科天启遥感科技有限公司</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2022-6-22").format("YYYY 年 MM月")} 至今`}</span>,
    responsibilities: [
      <span>负责研发组前端开发过程中所有地图相关的业务、交互的实现, 帮助团队总结React + 地图库(或任何第三方库,也可以称为副作用库)的最佳实践并且长期使用</span>,
      <span>负责研发组前端开发过程中React的技术分享, 总结、推动最佳实践在实际生产中的应用, 帮助同事面对函数式组件闭包等繁琐问题进行debug</span>,
      <span>负责项目临验收时间段, 于客户单位现场对接需求变动</span>,
      <span>最有趣的一件事情: 辅助部门总监从js基础到react核心的学习, 后续开始以客户端开发思想干涉web前端编码, 有些许技术选型和实现思路上的摩擦, 过程中也逐渐领悟了项目管理的一些经验</span>
    ]
  }
]
export default companies