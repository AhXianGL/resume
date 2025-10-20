import dayjs from "dayjs";
import styled from "styled-components";
const IndentDiv = styled.div`
  padding-left: 2rem;
  margin-bottom: 8px;
`;
const companies = [
  {
    name: (
      <span className="bold">
        中国农业科学院华东中心(苏州中农数智科技有限公司)
      </span>
    ),
    timeRange: (
      <span className="timestamp">{`${dayjs("2024-8-4").format(
        "YYYY 年 MM月"
      )} ~ 至今`}</span>
    ),
    content: [
      <div>
        岗位职责
        <IndentDiv>中级前端开发,主要承担了无人机管控系统、农田智能物联网设备管控系统的开发 主要负责前端全链路devopts, 迭代产品线前端框架</IndentDiv>
      </div>,
      <div>
        技术栈
        <IndentDiv>Vue3 + Pinia + Vite, 地图使用OpenLayers, 封装地图hooks为图层相关功能组件复用提供支撑</IndentDiv>
      </div>,
      <div>
        主要成果
        <IndentDiv>
          1. AI智能交互开发:为产品在AI方向上创造了交互亮点，承担了前端智能交互开发,实现了根据对话调用 MCP
          或者
          FunctionCall之后页面自动智能交互的功能，支撑农田监测系统的智能操作，减少用户手动操作步骤。
        </IndentDiv>
        <IndentDiv>
          2. WebGIS前端开发: 封装 Leaflet/OpenLayers Hooks, 覆盖
          “物联网设备地图交互, 点线面编辑, 空间数据可视化”
          核心场景，满足多个农业监管系统的地图交互需求。
        </IndentDiv>
        <IndentDiv>
          3. 搭建一体化前端模板: 基于 yudao-pro/Vben Admin/Vxe UI, 整合
          “业务系统 + 后台管理” 功能，将 CRUD 类需求的开发周期从 5 天 / 个缩短至
          2 天 / 个，效率提升 60%。
        </IndentDiv>
        <IndentDiv>
          4. 落地 DevOps 体系: 推进前后端 Docker 容器化，覆盖率达 100%,
          已归档服务和数据的迁移成本大大降低；通过阿里云效搭建 CI/CD
          流程，部署时间缩短 90%，
        </IndentDiv>
      </div>,
    ],
  },
  {
    name: <span className="bold">苏州牧星智能科技有限公司</span>,
    timeRange: (
      <span className="timestamp">{`${dayjs("2022-6-22").format(
        "YYYY 年 MM月"
      )}~ ${dayjs("2024-8-1").format("YYYY 年 MM月")}`}</span>
    ),
    content: [
      <div>
        岗位职责
        <IndentDiv>前端开发，主要负责智能仓储 AGV 调度系统前端开发，主要负责前端 monorepo 主仓库的开发和维护</IndentDiv>
      </div>,
      <div>
        技术栈
        <IndentDiv>React + TypeScript + Vite + Zustand</IndentDiv>
      </div>,
      <div >
        主要成果
        <IndentDiv>
          1.推动monorepo落地：针对产品主仓库多个研发团队的协作需求，参与设计并落地
          “git submodules + monorepo”
          开发模式，实现各业务模块的解耦与高效集成，跨团队代码合并冲突率降低
        </IndentDiv>
        <IndentDiv>
          2. 仓储调度可视化：在智能仓储调度系统中，采用面向对象思想整合
          React、图形库 Pixi.js 与物联网业务对象，构建数据驱动的视图更新机制;
          通过多态实现了主视图和俯视图渲染逻辑部分复用。
        </IndentDiv>
        <IndentDiv>
          3. 推动技术栈升级与性能优化：主导前端工程化体系从
          “webpack4→webpack5→vite” 的迭代升级，通过 webpack5
          代码分割配置优化，使核心产品首页加载速度提升 45%；后续引入 vite
          后，开发环境热更新时间缩短至 2 秒内，研发迭代效率提升 50%。
        </IndentDiv>
        <IndentDiv>
          4. 重构地图交互组件与系统集成：针对地图相关问题修复效率低的痛点，重构
          React + 地图库的数据驱动组件，将地图 issue 修复周期从 5 人天压缩至 2
          人天，修复效率提升 60%；同时，采用 Umi.js+qiankun
          微前端方案完成多前端子系统集成，实现系统复用的与数据共享，系统集成工期缩短
          30%。
        </IndentDiv>
        <IndentDiv>
          5. 完成技术栈迁移：参与核心产品前端重构，主导将业务逻辑模块从
          JavaScript 迁移至
          TypeScript，提升代码类型安全性与可维护性，后续新功能开发 bug
          率降低，代码复用率提升。
        </IndentDiv>
      </div>,
    ],
  },
];
export default companies;
