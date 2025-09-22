import dayjs from "dayjs";
const companies = [
  {
    name: (
      <span className="bold">
        中国农业科学院华东中心(苏州中农数智科技有限公司)
      </span>
    ),
    timeRange: (
      <span className="timestamp">{`${dayjs("2024-5-1").format(
        "YYYY 年 MM月"
      )} ~ 至今`}</span>
    ),
    content: [
      <div>岗位职责: 产品研发部-高级前端开发</div>,
      <div>
        工作亮点:
        <div>
          AI模块前端开发: 实现了基于 OpenAI 标准的api 的
          AI智能交互开发、知识库问答开发。
        </div>
        <div>
          自研地图服务前端开发: 封装大量Web GIS 组件,
          完成了自研地图服务前端开发, 负责业务点线面空间要素的编辑,
          空间数据可视化开发。
        </div>
        <div>
          应用模板搭建: 基于社区解决方案(yudao-pro, Vben Admin, Vxe
          UI)搭建了一套业务系统+后台管理一体化的前端模板,
          显著提升了CRUD业务的开发效率。
        </div>
        <div>
          DevOps: 全面推进 Docker, 前后端容器化覆盖率提升至 100%, 利用云效落地了
          CICD, 提升了部署和运维的效率, 并且降低了已归档项目的迁移成本。
        </div>
      </div>,
    ],
  },
  {
    name: <span className="bold">苏州牧星智能科技有限公司</span>,
    timeRange: (
      <span className="timestamp">{`${dayjs("2024-3-1").format(
        "YYYY 年 MM月"
      )}~ ${dayjs("2024-5-1").format("YYYY 年 MM月")}`}</span>
    ),
    content: [
      <div>岗位职责: 新产品研发部-高级前端开发</div>,
      <div>
        工作亮点:
        <div>
          产品主仓库使用git submodules + monorepo的模式进行协同开发与系统集成
        </div>
        <div>
          智能仓储调度系统使用面向对象的方式将React、图形库Pixi.js、物联网业务对象结合起来用数据驱动视图更新,实现大量小车的流畅渲染
        </div>
      </div>,
    ],
  },
  {
    name: <span className="bold">中科苏州地理科学与技术研究院(中科天启)</span>,
    timeRange: (
      <span className="timestamp">{`${dayjs("2022-6-22").format(
        "YYYY 年 MM月"
      )}~ ${dayjs("2024-2-23").format("YYYY 年 MM月")}`}</span>
    ),
    content: [
      <div>岗位职责: 产品研发部-初级前端开发</div>,
      <div>
        工作亮点:
        <div>
          参与核心产品前端重构与研发, 完成前端核心业务逻辑模块js向ts的升级迁移
        </div>
        <div>
          重构了项目中的地图交互组件, 实现了React +
          地图库(或任何第三方库)的数据驱动组件, 地图相关issue修复效率由 5人天提升至 2人天
        </div>
        <div>
          主导完成前端工程化体系升级(webpack4-&gt;webpack5-&gt;vite),
          webpack升级后通过优化代码分割配置提升了首页加载速度, 使用Umi.js +
          qiankun完成前端子系统集成
        </div>
      </div>,
    ],
  },
];
export default companies;

//
/* 
    name: <span className='bold'>苏州牧星智能科技有限公司</span>,
    timeRange: <span className='timestamp'>{`${dayjs("2024-3-1").format("YYYY 年 MM月")}~ ${dayjs("2024-5-1").format("YYYY 年 MM月")}`}</span>,
    responsibilities: [
      <span>岗位职责: 高级前端开发, 推进多子模块之间使用monorepo的模式进行协同开发与系统集成</span>,
      <span>开发工作: 前端建立货架、货列、AGV小车等业务模型对应的Entity、VO、DTO, 使用面向对象的方式将React、图形库Pixi.js、业务对象结合起来用数据驱动视图更新, 实现大量小车的流畅渲染</span>,
    ]
 */
