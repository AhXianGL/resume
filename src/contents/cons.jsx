import styled from "styled-components";
import Bold from "../component/Bold";
const ConsTitle = ({ className, title }) => {
  return <p className={className}>{title}</p>;
};
const SpreadedConsTitle = styled(ConsTitle)`
  margin-bottom: 1px;
`;
const cons = [
  <>
    <SpreadedConsTitle title="[前端开发能力]" /> 
    熟练使用<Bold>TypeScript</Bold>,
    熟练使用<Bold>React, Vue3</Bold>,
    熟练使用<Bold>Tailwind</Bold>.
    熟练使用<Bold>Ant Design, Arco Design, Shacn UI</Bold>组件库.
    掌握<Bold>S3大文件上传,单点登录,OAuth登录等系统基础模块的开发</Bold>.
  </>,
  <>
    <SpreadedConsTitle title="[工程化与DevOps]" />
    熟练使用<Bold>Vite,webpack</Bold>,有<Bold>pnpm+monorepo</Bold>的工程化经验.
    熟练使用<Bold>Linux</Bold>常见命令,具备常见 Linux 环境问题排查能力.
    熟练使用<Bold>Nginx, Docker, Docker Compose</Bold>, 具备阿里云效,腾讯coding平台<Bold>CI/CD</Bold>流程搭建经验.
  </>,
  <>
    <SpreadedConsTitle title="[AI智能体]" /> 
    具备<Bold>AI+Web智能交互</Bold>的生产实现经验,
    具备<Bold>Dify AI智能体</Bold>编排和私有化部署经验,
    掌握 <Bold>RAG</Bold>知识库搭建的流程和原理.
  </>,
  <>
    <SpreadedConsTitle title="[WebGIS开发]" /> 
    精通<Bold>leaflet,OpenLayers,turfjs</Bold>,熟练使用<Bold>geoserver</Bold>,精通地图交互的开发.
  </>,
  <>
    <SpreadedConsTitle title="[行业经验与开源]" /> 
    为Vue开源组件库Ant Design Vue 贡献代码, 具备一定ToB、ToG业务经验.
  </>,
];
export default cons;
