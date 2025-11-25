import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/32791282?v=4',
    hidden: false,
  },
  profile: {
    name: '你的姓名',
    email: 'your-email@example.com',
    mobile: '13800000000',
    github: 'https://github.com/jackyrwj',
    zhihu: 'https://zhihu.com/people/your-id',
    workExpYear: '',
    workPlace: '所在城市',
    positionTitle: '应聘职位（如：前端工程师）',
  },
  educationList: [
    {
      edu_time: ['2014.09.01', '2018.06.30'],
      school: '某某大学',
      major: '专业名称（如：计算机科学与技术）',
      academic_degree: '本科',
    },
  ],
  awardList: [
    {
      award_info: '奖项名称示例（如：校级一等奖学金）',
      award_time: '2018',
    },
    {
      award_info: '奖项名称示例（如：优秀毕业生 / 优秀员工）',
      award_time: '2019.06',
    },
    {
      award_info: '奖项名称示例（如：技术竞赛奖项）',
      award_time: '2020.10',
    },
    {
      award_info: '奖项名称示例（如：其它荣誉 / 证书）',
      award_time: '2021.07',
    },
  ],
  workExpList: [
    {
      company_name: '某互联网公司 A',
      department_name: '前端团队',
      work_time: ['2018.06', null],
      work_desc:
        '负责公司核心 Web 产品的前端开发与性能优化；与产品、设计协作迭代交互体验；参与组件库和前端工程化体系的建设等。',
    },
    {
      company_name: '某科技公司 B',
      department_name: '研发中心',
      work_time: ['2017.06', '2017.12'],
      work_desc:
        '前端开发工程师 / 实习生。参与后台管理系统、数据可视化大屏等项目的开发，积累了良好的编码习惯和团队协作经验。',
    },
    {
      company_name: '某创业公司 C',
      department_name: '',
      work_time: ['2017.03', '2017.05'],
      work_desc:
        '前端实习生。使用 Vue / React 等技术实现业务页面与交互逻辑，并对接口返回的数据进行可视化展示。',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      // '熟练掌握 html, css 等前端基础技术，不借助框架编写响应式/移动端网页',
      skill_desc: '',
      skill_level: 89,
    },
    {
      skill_name: 'TypeScript / JavaScript',
      // skill_desc: '熟悉 TypeScript，丰富的 ts 项目经验',
      skill_level: 90,
    },
    {
      skill_name: '数据可视化',
      skill_desc: '丰富的可视化工程实践以及开源经验',
      skill_level: 90,
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc: '大型前端项目经验以及组件库开发经验',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '企业经营数据看板平台',
      project_role: '前端负责人',
      project_time: '2019.04 - 2020.06',
      project_desc:
        '面向管理层的经营分析与决策支持平台，提供关键业务指标看板、监控告警和协同沟通能力，帮助管理层及时掌握业务走势。',
      project_content:
        '1. 负责项目前端从 0 到 1 的技术选型与架构设计；2. 与产品、设计紧密合作打磨页面布局与交互细节；3. 建立监控与稳定性保障机制，提升系统可用性。',
    },
    {
      project_name: '自助式数据分析与报表平台',
      project_role: '可视化模块负责人',
      project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
      project_desc:
        '面向业务和分析人员的自助式数据分析平台，通过拖拽配置图表和报表的方式，降低数据分析与可视化的使用门槛。',
      project_content:
        '1. 负责图表编辑与拖拽编排等可视化核心能力建设；2. 设计并实现通用图表组件，支持多种业务场景复用；3. 持续优化交互体验与前端性能，提升报表制作效率。',
    },
    {
      project_name: '可视化图表组件库',
      project_role: '核心开发者',
      project_time: '2019 - 至今',
      project_desc:
        '面向业务系统和数据产品的通用图表组件库，提供常见统计图表与大屏组件，支持主题配置与多终端适配。',
      project_content:
        '1. 参与组件库整体架构设计与核心功能开发；2. 维护文档与示例，提高组件易用性；3. 支持业务方接入与问题排查，推动组件库在团队内部落地。',
    },
  ],
  workList: [
    // {
    //   work_name: '个人简历生成器',
    //   visit_link: 'https://your-github-username.github.io/resume',
    // },
    // {
    //   work_name: '个人项目示例（如：可视化主题生成器）',
    //   visit_link: 'https://your-demo-link.com/theme-builder',
    // },
    // {
    //   work_name: '个人项目示例（如：数据可视化作品集）',
    //   visit_link: 'https://your-demo-link.com/visualization-gallery',
    // },
  ],
  aboutme: {
    aboutme_desc:
      '这里写你的自我介绍，例如：个人背景、擅长领域以及职业目标等，可根据需要自由修改这段文字。',
  },
  // 国际化
  locales: {
    'en-US': {
      profile: {
        name: 'Your Name',
        email: 'your-email@example.com',
        mobile: '+86 138 0000 0000',
        github: 'https://github.com/jackyrwj',
        zhihu: 'https://zhihu.com/people/your-id',
        workExpYear: '3 years',
      },
      skillList: [
        { skill_name: 'HTML 和 CSS', skill_desc: '', skill_level: 89 },
        { skill_name: 'TypeScript / JavaScript', skill_level: 90 },
        {
          skill_name: 'Data Visualization',
          skill_desc: '丰富的可视化工程实践以及开源经验',
          skill_level: 90,
        },
        {
          skill_name: 'React / 前端工程化',
          skill_desc: '大型前端项目经验以及组件库开发经验',
          skill_level: 80,
        },
      ],
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/32791282?v=4',
        hidden: false,
      },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'Your University',
          major: 'Your Major',
          academic_degree: 'Bachelor',
        },
      ],
      awardList: [
        {
          award_info: 'Example: First-class scholarship',
          award_time: '2018',
        },
        {
          award_info: 'Example: Outstanding graduate / employee award',
          award_time: '2019.06',
        },
        {
          award_info: 'Example: Technical competition award',
          award_time: '2020.10',
        },
        {
          award_info: 'Example: Other honors / certificates',
          award_time: '2021.07',
        },
      ],
      workExpList: [
        {
          company_name: 'Internet Company A',
          department_name: 'Frontend Team',
          work_time: ['2018.06', null],
          work_desc:
            'Responsible for core web product development and performance optimization; collaborate with product and design to improve UX; help build internal component library and tooling.',
        },
        {
          company_name: 'Tech Company B',
          department_name: 'R&D Center',
          work_time: ['2017.06', '2017.12'],
          work_desc:
            'Frontend engineer / intern. Participated in admin systems and data visualization dashboards; gained solid coding practices and team collaboration experience.',
        },
      ],
      projectList: [
        {
          project_name: 'Business Dashboard Platform',
          project_role: 'Frontend Lead',
          project_time: '2019.04 - 2020.06',
          project_desc:
            'Decision-support dashboard for management, providing key metrics, monitoring and collaboration features.',
          project_content:
            '1. Led frontend architecture and technology stack design; 2. Worked closely with product and design to refine layout and interactions; 3. Built monitoring and stability mechanisms to improve reliability.',
        },
        {
          project_name: 'Self-service Analytics & Reporting Platform',
          project_role: 'Visualization Module Owner',
          project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
          project_desc:
            'Self-service BI platform that allows users to configure charts and reports via drag-and-drop, lowering the barrier for data analysis.',
          project_content:
            '1. Owned visual editing and drag-and-drop layout features; 2. Designed reusable chart components for various business scenarios; 3. Continuously improved UX and performance to speed up report building.',
        },
        {
          project_name: 'Chart Component Library',
          project_role: 'Core Developer',
          project_time: '2019 - 至今',
          project_desc:
            'General-purpose chart component library for business systems and data products, supporting themes and responsive design.',
          project_content:
            '1. Participated in architecture design and core feature development; 2. Maintained docs and examples to improve usability; 3. Supported integration and troubleshooting for internal teams.',
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc:
          'Use this area to briefly introduce yourself, your background, and what you are looking for.',
      },
    },
  },
};
