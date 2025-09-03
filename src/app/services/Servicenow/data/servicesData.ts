import {
  BriefcaseBusiness,
  ClipboardList,
  ReceiptText,
  LucideIcon,
  Workflow,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const spmServices: Service[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0b80811f58c5bc247_Frame%2032%20(44).svg",
    title: "Demand Management",
    description:
      "Streamline demand intake, prioritization, and approval processes. Centralize all project requests and align them with strategic objectives for better resource allocation and decision-making.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea040fedc94b03264b6_Frame%2032%20(45).svg",
    title: "Project Portfolio Management (PPM)",
    description:
      "Comprehensive project oversight with real-time dashboards, milestone tracking, and portfolio optimization. Manage multiple projects simultaneously while ensuring strategic alignment and delivery excellence.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0790d05b4b1f037cd_Frame%2032%20(46).svg",
    title: "Resource Management",
    description:
      "Optimize resource allocation across projects and teams. Track capacity, skills, and availability to ensure the right resources are assigned to the right projects at the right time.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0881a187e41234433_Frame%2032%20(47).svg",
    title: "Application Portfolio Management (APM)",
    description:
      "Manage your entire application landscape with lifecycle tracking, dependency mapping, and optimization recommendations. Reduce technical debt and improve application performance.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea1b80811f58c5bc25b_Frame%2032%20(48).svg",
    title: "Financial Management",
    description:
      "Track project budgets, costs, and ROI in real-time. Integrate financial planning with project execution for better cost control and financial transparency across your portfolio.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0484d12006e019407_Frame%2032%20(49).svg",
    title: "Scenario Planning",
    description:
      "Create and compare multiple portfolio scenarios to optimize resource allocation and strategic outcomes. Make data-driven decisions with what-if analysis and impact assessment.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea07a1075b3cb906810_Frame%2032%20(50).svg",
    title: "Agile Development",
    description:
      "Support agile methodologies with sprint planning, backlog management, and team collaboration tools. Integrate agile practices seamlessly with traditional project management approaches.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0674c5a6cbd51b1e8_Icon%20(6).svg",
    title: "Performance Analytics",
    description:
      "Advanced reporting and analytics to measure portfolio performance, track KPIs, and identify improvement opportunities. Gain insights into project health, resource utilization, and strategic alignment.",
  },
];

export const itsmServices: Service[] = [
  {
    icon: "/icons/extra1.png",
    title: "Incident Management",
    description:
      "Restore normal service operation as quickly as possible and minimize the adverse impact on business operations with streamlined workflows and SLAs.",
  },
  {
    icon: "/icons/extra2.png",
    title: "Problem Management",
    description:
      "Identify root causes, prevent incidents, and reduce the impact of recurring issues using trend analysis and knowledge-driven resolutions.",
  },
  {
    icon: "/icons/resource.png",
    title: "Change Enablement",
    description:
      "Plan, assess, and implement changes with minimal risk using CAB approvals, risk scoring, and standardized workflows.",
  },
  {
    icon: "/icons/ppm.png",
    title: "Request Management",
    description:
      "Deliver common services through a user-friendly portal and catalog with automated fulfillment and clear status updates.",
  },
  {
    icon: "/icons/demand.png",
    title: "Knowledge Management",
    description:
      "Capture and share knowledge articles to speed up resolutions and empower self-service across the organization.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Level Management",
    description:
      "Define, track, and meet SLAs/OLAs with real-time visibility, proactive notifications, and performance analytics.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Configuration Management Database (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];
export const itamServices: Service[] = [
  {
    icon: "/icons/extra1.png",
    title: "Incident Management",
    description:
      "Restore normal service operation as quickly as possible and minimize the adverse impact on business operations with streamlined workflows and SLAs.",
  },
  {
    icon: "/icons/extra2.png",
    title: "Problem Management",
    description:
      "Identify root causes, prevent incidents, and reduce the impact of recurring issues using trend analysis and knowledge-driven resolutions.",
  },
  {
    icon: "/icons/resource.png",
    title: "Change Enablement",
    description:
      "Plan, assess, and implement changes with minimal risk using CAB approvals, risk scoring, and standardized workflows.",
  },
  {
    icon: "/icons/ppm.png",
    title: "Request Management",
    description:
      "Deliver common services through a user-friendly portal and catalog with automated fulfillment and clear status updates.",
  },
  {
    icon: "/icons/demand.png",
    title: "Knowledge Management",
    description:
      "Capture and share knowledge articles to speed up resolutions and empower self-service across the organization.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Level Management",
    description:
      "Define, track, and meet SLAs/OLAs with real-time visibility, proactive notifications, and performance analytics.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Configuration Management Database (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];

interface BenefitItem {
  title: string;
  description: string;
  imageSrc: string;
}

export const spmBenefits: BenefitItem[] = [
  {
    title: "Faster Service Lifecycle Management",
    description:
      "SPM streamlines defining, launching, and retiring services for a more agile approach to managing the service lifecycle.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Accelerated Service Delivery",
    description:
      "SPM accelerates service delivery and improvements by automating workflows and offering predefined models.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Improved Decision-Making",
    description:
      "With data-driven insights and dashboards, SPM aids in the strategic planning and prioritization of service investments.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Management and Optimization",
    description:
      "ServiceNow’s SPM improves service costs by managing budgets, forecasting expenses and reducing spending.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itsmBenefits: BenefitItem[] = [
  {
    title: "Efficiency that Drives Growth",
    description:
      "Automate routine tasks and enable your IT team to prioritize strategic projects.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Enhanced End-User Experience",
    description:
      "Transform IT into a proactive, responsive function with quality service.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Data-Driven Insights for Continuous Improvement",
    description:
      "Real-time reporting and analytics optimize resources and drive improvement.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Savings through Operational Efficiency",
    description:
      "Reduce manual workload to optimize service delivery with high service quality.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itamBenefits: ConsiderationItem[] = [
  {
    title: "Cost Savings through Optimized Asset Usage",
    description:
      "With a comprehensive view of asset utilization, ServiceNow ITAM helps you avoid redundant purchases, reduce maintenance costs, and maximize asset life.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862239e6a807206c184c0df_Frame%2032%20(55).svg",
  },
  {
    title: "Improved Compliance and Reduced Audit Risk",
    description:
      "ServiceNow ITAM provides visibility into license compliance and usage, reducing the risk of non-compliance, audit penalties, and unexpected costs.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862239d9d8274bdb16ee96f_Icon%20(6).svg",
  },
  {
    title: "Enhanced Decision-Making with Real-Time Data",
    description:
      "Accurate, real-time data on asset status and utilization empowers stakeholders to make informed decisions, whether optimizing software usage or planning future hardware acquisitions.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862239d0d52fc2fb3a5b2cf_Frame%203465873%20(4).svg",
  },
  {
    title: "Streamlined Asset Lifecycle Management",
    description:
      "Automated workflows across the asset lifecycle—from procurement to disposal—ensure efficient, transparent, and cost-effective asset management practices.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621fae26ee7d55e51b829e_Frame%2032%20(53).svg",
  },
];
export const itomBenefits: BenefitItem[] = [
  {
    title: "Enhanced Operational Efficiency",
    description:
      "Automate routine operational tasks, allowing your team to focus on more strategic initiatives while maintaining high-quality service.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Faster Problem Resolution",
    description:
      "Due to monitoring, event correlation, and automation, ServiceNow ITOM helps to identify and resolve issues quickly, reducing downtime.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Smarter Resource Allocation",
    description:
      "Provide your team with deeper insights into infrastructure health, enabling better resource management and significantly reducing wastage.",
    imageSrc:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Increased Agility",
    description:
      "Quickly adapt to IT changes through automatic provisioning of cloud resources or rapid response to infrastructure events.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Real-time insights from performance metrics, analytics, and dashboards help optimize IT operations and drive continuous improvement.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce operational costs by eliminating manual interventions, optimizing resource utilization, and streamlining IT processes.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
  },
];

export const hrsdBenefits: BenefitItem[] = [
  {
    title: "Automate HR Interactions",
    description:
      "Automate routine processes by routing requests to the right person and department with automatic grouping.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Manage, Track and Prioritize HR Work",
    description:
      "Utilize a single platform for all HR services. Deliver a consistent and engaging employee experience. Track, manage, and prioritize work.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Employee Center Pro.",
    description:
      "Give employees a single, unified system to engage with HR. Easily submit, manage, and track the status of requests.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },

];
export const csmBenefits: BenefitItem[] = [
  {
    title: "Improved Customer Satisfaction",
    description:
      "Enhance customer satisfaction with prompt, intimate, and individualized service experiences.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Operational Efficiency",
    description:
      "Simplify procedures to enhance service performance and reduce operating costs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Proactive Issue Resolution",
    description:
      "Enhance customer experience and reduce issues with proactive issues detection and resolution.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Enhanced Customer Retention",
    description:
      "Foster customer loyalty by consistently surpassing their expectations with quality service.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

// Challenge data interfaces and arrays
export interface ChallengeItem {
  id: string;
  icon: string; // URL to the icon image
  title: string;
  description: string;
}

export const spmChallenges: ChallengeItem[] = [
  {
    id: "portfolio",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ff8ed9ced1d33ea9536_Frame%2032%20(44).svg",
    title: "Portfolio Visibility and Alignment",
    description:
      "Provides a complete view of projects, portfolios, and business objectives.",
  },
  {
    id: "resource",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ff8765ff6562c3a7d77_Icon%20(6).svg",
    title: "Resource Optimization",
    description:
      "Ensures the best use of available resources across various projects.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ff856c82ad5ffe6ee92_Frame%203465873%20(4).svg",
    title: "Risk and Issue Management",
    description:
      "Proactively identifies and addresses risks to ensure project success.",
  },
  {
    id: "value",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ff88a5c065df60c0aa4_Frame%203465874%20(4).svg",
    title: "Value Realization and Measurement",
    description:
      "Tracks and measures the value delivered by portfolio execution.",
  },
];

export const itsmChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755feeb4659a4ae5ee4_Frame%2032%20(33).svg",
    title: "Fragmented Systems and Data Silos",
    description:
      "ServiceNow ITSM consolidates data and workflows in a unified platform, breaking down silos and ensuring seamless operations across departments.",
  },
  {
    id: "efficiency",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a37554b5cd2f0d473e0a4_Icon%20(5).svg",
    title: "Manual, Error-Prone Processes",
    description:
      "ServiceNow ITSM automated workflows reduce manual workloads and accelerate service resolution so your team can focus on higher-value initiatives.",
  },
  {
    id: "visibility",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375528e4c952c3185bc2_Frame%203465873%20(3).svg",
    title: "Risk of Downtime and Service Disruptions",
    description:
      "ServiceNow ITSM provides a structured process for incidents and problems to help quickly address and resolve issues and minimize downtime.",
  },
  {
    id: "compliance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375540fedc94b02e783b_Frame%203465874%20(3).svg",
    title: "Scaling IT with Business Growth",
    description:
      "ServiceNow ITSM spans everything from foundational IT functions to advanced service management, evolving seamlessly with your business.",
  },
];

export const itamChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621faeb77e9bc415fd4cfe_Frame%2032%20(51).svg",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621faed81d6f11f44e9d35_Frame%2032%20(52).svg",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621fae26ee7d55e51b829e_Frame%2032%20(53).svg",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621fae3cebce52e4399b6e_Frame%2032%20(54).svg",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];

export const itomChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623c6b760421706884d68b_Frame%2032%20(51).svg",
    title: "Fragmented IT Environments and Lack of Visibility",
    description:
      "Traditional environments often lack extensive visibility, making it difficult to identify issues or manage resources.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623c6b3c1cb23c4bc0cea9_Icon%20(6).svg",
    title: "Manual IT Operations",
    description:
      "Repetitive and error-prone tasks drain IT resources and slow down response times to service disruptions or outages.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623c6b75f1889a9c7ac1be_Frame%203465873%20(4).svg",
    title: "Scaling IT with Business Growth",
    description:
      "As organizations grow, scaling IT infrastructure becomes increasingly complex without centralization.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623c6be78100a24c8527ff_Frame%203465874%20(4).svg",
    title: "Proactive Problem Identification and Resolution",
    description:
      "Without proper tools, issues often go unnoticed until they cause disruption, leading to costly downtime.",
  },
];
export const irmChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686225e3328aabfc079ca200_Frame%2032%20(53).svg",
    title: "Siloed Risk and Compliance Processes",
    description:
      "Many organizations struggle with fragmented risk and compliance practices, leading to inefficiencies and a lack of visibility. ServiceNow IRM centralizes and standardizes these processes, improving coordination and providing a unified view of enterprise risk..",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686225e4c698a6960c99dafe_Frame%2032%20(54).svg",
    title: "Manual Risk Management and Compliance",
    description:
      "Traditional methods of managing risk and compliance are often resource-intensive, time-consuming, and prone to errors. IRM automates routine tasks, enabling teams to identify, assess, and mitigate risks more efficiently.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686225e32293e0967d2bd363_Frame%2032%20(55).svg",
    title: "Inability to Proactively Manage Risks",
    description:
      "Without real-time insights and proactive monitoring, organizations may only respond to risks after they become issues. ServiceNow IRM provides predictive analytics and monitoring capabilities, allowing teams to address potential risks before they impact operations.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686225e391a85953244c81cd_Frame%2032%20(56).svg",
    title: "Complex Regulatory Compliance Requirements",
    description:
      "With evolving regulations, staying compliant can be challenging and costly. IRM helps organizations streamline compliance tracking, assess regulatory impact, and maintain a continuous state of compliance with minimal effort.",
  },
];
export const csmChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160de03c4ac6ec109e992_Frame%2032%20(13).svg",
    title: "Fragmented Customer Data Silos and Systems",
    description:
      "Enhance service delivery by integrating customer data and workflows into a single platform.",
  },
  {
    id: "efficiency",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dee18a46ef44b82141_Icon%20(3).svg",
    title: "Slow Resolution Times",
    description:
      "Resolve cases faster with automated workflows so agents can focus on client interactions.",
  },
  {
    id: "visibility",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160de894fb1d40523959a_Frame%203465873%20(2).svg",
    title: "Absence of Proactive Service",
    description:
      "Anticipate challenges and proactively address them with built-in AI and predictive analytics.",
  },
  {
    id: "compliance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5b8e0a6a6bbe5d1a946_Frame%203465874.svg",
    title: "Scaling Customer Service with Business Growth",
    description:
      "Scale at the speed of light to address your company's growing needs and shifting customer demands.",
  },
];
export const hrsdChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e95de37a0649c4fbca4f_Frame%2032.svg",
    title: "HR Case Management",
    description:
      "HR Cases store detailed information about an employee’s HR request or inquiry. Instead of exchanging multiple emails or phone calls, all relevant details are securely captured within the HR Case form for streamlined management.",
  },
  {
    id: "efficiency",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5b832b3e32edfb72714_Icon%20(1).svg",
    title: "Employee Document Management",
    description:
      "The Employee Document Management application provides a central location for storing and managing all electronic employee documents, which can be transferred into the Document Management system manually or automatically.",
  },
  {
    id: "visibility",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5b80b0fceb1f84c4908_Frame%203465873.svg",
    title: "Employee Forums",
    description:
      "Employee Forums help employees connect, engage, and collaborate with other employees. Employees can receive fast responses to their issues by posting questions, reviewing blogs or videos, and searching for past discussions.",
  },
  {
    id: "compliance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5b8e0a6a6bbe5d1a946_Frame%203465874.svg",
    title: "Virtual Agent",
    description:
      "Uses natural language understanding to deliver tailored and correct responses to employee inquiries through a conversational experience. With Predictive Intelligence, HR cases created via email can be automatically categorized.",
  },
];
export const secOpsChallenges: ChallengeItem[] = [
  {
    id: "siloed",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623407261a9bc6da2c17d7_Frame%2032%20(51).svg",
    title: "Siloed Security and IT Teams",
    description:
      "In many organizations, security and IT teams work in isolation, resulting in delayed responses and a lack of coordination. SecOps bridges these silos, enabling seamless collaboration to reduce response times and improve overall security posture",
  },
  {
    id: "manual",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234070a6b9fa56927fd41_Frame%2032%20(52).svg",
    title: "Manual Incident Response Processes",
    description:
      "Traditional incident response processes are often time-consuming and involve manual steps, leading to delayed resolutions and increased risk. SecOps automates repetitive tasks, freeing up resources and allowing security teams to focus on critical incidents.",
  },
  {
    id: "overwhelming",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623407f18fa60602b1ef19_Frame%2032%20(53).svg",
    title: "Overwhelming Volume of Security Alerts",
    description:
      "With the growing number of security tools and alerts, security teams are often overwhelmed, which can lead to alert fatigue. ServiceNow SecOps prioritizes alerts based on threat level, reducing noise and ensuring that high-priority threats are addressed quickly.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234072f6b9caabe96e87f_Frame%2032%20(54).svg",
    title: "Difficulty in Threat Intelligence Integration",
    description:
      "Integrating threat intelligence from various sources can be challenging, impacting the accuracy and speed of threat detection. ServiceNow SecOps consolidates threat intelligence within a single platform, allowing for rapid, data-driven responses to emerging threats.",
  },
];
export const fsmChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231605774fdb0b7c59273_Frame%2032%20(51).svg",
    title: "Inefficient Scheduling and Dispatching",
    description:
      "Traditional scheduling can lead to delays, overbooked technicians, and resource inefficiencies. FSM’s intelligent scheduling automates assignments based on skills, availability, and location, optimizing resource allocation.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231607aa637916bb320d6_Frame%2032%20(52).svg",
    title: "Limited Visibility into Field Operations",
    description:
      "Organizations often lack real-time insight into technician locations and job status, making managing and adjusting field operations challenging. FSM provides real-time visibility, enabling managers to monitor and adapt schedules as needed.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231609ce7caa52f253b96_Frame%2032%20(53).svg",
    title: "Complex Coordination for Multi-Stage Workflows",
    description:
      "Field services frequently involve multi-step workflows that require close coordination across teams. FSM simplifies workflow management, automating multi-stage tasks and facilitating seamless hand-offs.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623160e78100a24c7e749a_Frame%2032%20(54).svg",
    title: "Maintaining Service Quality",
    description:
      "Ensuring that field service meets quality standards is challenging, especially for geographically distributed teams. FSM enforces consistent processes and provides tools for tracking performance, improving service quality.",
  },
];
export const wsdChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862371fb77e9bc41509deab_Frame%2032%20(51).svg",
    title: "Fragmented Workplace Management Systems",
    description:
      "Without insight into resource use, space use, and service performance, organizations struggle to improve their workspaces. WSD gives real-time data to boost resource use and lower costs.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862371f37b25410c6aead8b_Frame%2032%20(52).svg",
    title: "Manual, Time-Consuming Processes",
    description:
      "Many workplace tasks, like room booking still rely on manual workflows that waste time and slow productivity. WSD automates these tasks, speeding up responses and improving service efficiency.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862371f15ff17cd3cf758a4_Frame%2032%20(53).svg",
    title: "Inconsistent Employee Experience",
    description:
      "Disconnected tools and limited visibility into resources can impact employee experience. WSD provides a unified, easy-to-use platform for all workplace services, ensuring employees can access what they need.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862371fa4634a9b29d4f893_Frame%2032%20(54).svg",
    title: "Limited Visibility",
    description:
      "Without insight into resource use, space occupancy, and service performance, organizations struggle to optimize their workspaces. WSD delivers real-time analytics to improve resource allocation and cut costs.",
  },
];

export const itsmCapabilities: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755a671c90bf030d95b_Frame%2032%20(26).svg",
    title: "Incident Management",
    description:
      "Efficiently manage and resolve IT issues to restore normal service operations.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c4fff945f84cd49c_Frame%2032%20(27).svg",
    title: "Change Management",
    description:
      "Ensure controlled and smooth implementation of IT changes with minimal impact.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a37556e21d41424df69ed_Frame%2032%20(28).svg",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a37552a490981b28e81ca_Frame%2032%20(29).svg",
    title: "Configuration Management (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
  {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755407518f7e37cf05d_Frame%2032%20(30).svg",
    title: "Problem Management",
    description:
      "Identify and handle root causes of repeat incidents to minimize service disruptions.",
  },
  {
    id: "rm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755a671c90bf030d95f_Frame%2032%20(31).svg",
    title: "Request Management",
    description:
      "Simplify service requests with standardized workflows and approvals.",
  },
  {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755617322f52fbe6ffa_Frame%2032%20(32).svg",
    title: "Knowledge Management",
    description:
      "Share and reuse knowledge to resolve issues faster and enhance user experience.",
  },
  {
    id: "amc",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755f4753525f93c3590_Icon%20(4).svg",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];
export const itomCapabilities: ChallengeItem[] = [
  {
    id: "event",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5a56999a416fd24c9_Frame%2032%20(51).svg",
    title: "Event Management",
    description:
      "Monitor and correlate events from IT infrastructure, identifying issues before they impact service delivery.",
  },
  {
    id: "orchestration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad58d158d543b245806_Frame%2032%20(52).svg",
    title: "Orchestration",
    description:
      "Automate manual, repetitive tasks to improve the speed and accuracy of incident response and service provisioning.",
  },
  {
    id: "cloud",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5ffd1f6551080fd5e_Frame%2032%20(53).svg",
    title: "Cloud Management",
    description:
      "Simplify cloud management with visibility and control across public, private, and hybrid environments.",
  },
  {
    id: "discovery",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5da6d00c342846bcd_Frame%2032%20(54).svg",
    title: "Discovery",
    description:
      "Automatically identify and map all IT assets across your environment, providing a full view of your infrastructure.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad56c19d845e371264a_Frame%2032%20(55).svg",
    title: "Service Mapping",
    description:
      "Visualize service dependencies and quickly identify the underlying root cause of disruptions, minimizing downtime.",
  },
  {
    id: "IM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad540558de4936eb451_Frame%2032%20(56).svg",
    title: "Infrastructure Monitoring",
    description:
      "Continuously monitor infrastructure health, performance, and availability for proactive issue response.",
  },
  {
    id: "CMDB",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5a1c99ec38add6748_Frame%2032%20(57).svg",
    title: "CMDB (Configuration Management Database)",
    description:
      "Maintain an up-to-date inventory of your IT assets and configurations, providing a single source of truth for all systems and services.",
  },
  {
    id: "CM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad437b25410c6b0d85b_Frame%2032%20(58).svg",
    title: "Certificate Management",
    description:
      "Certificate management in ITOM includes the handling, tracking, renewal, and monitoring of digital certificates in IT infrastructure.",
  },
  {
    id: "ACC",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5dc394e09ab756283_Frame%2032%20(59).svg",
    title: "Agent Client Collector",
    description:
      "The Agent Client Collector (ACC) in ITOM is a lightweight agent installed on endpoints, servers, or devices to facilitate data collection and enable operational workflows.",
  },
  {
    id: "SRM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad53cebce52e447c243_Frame%2032%20(60).svg",
    title: "Service Reliability Management",
    description:
      "Service Reliability Management (SRM) in ITOM focuses on ensuring that IT services meet agreed-upon performance, availability, and reliability standards.",
  },
  {
    id: "MI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad5aae5146018eb14d4_Frame%2032%20(61).svg",
    title: "Metric Intelligence",
    description:
      "Metric Intelligence in ITOM is the process of collecting, analysing, and using metrics from IT systems for monitoring, troubleshooting, and optimization.",
  },
  {
    id: "CA",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ad58ef9b871c85e86c1_Frame%2032%20(62).svg",
    title: "Cloud Accelerate",
    description:
      "Cloud Accelerate in ITOM Cloud Accelerate in ITOM signifies a suite of sophisticated tools, capabilities, and frameworks engineered to optimize and streamline cloud operations.",
  },
];
export const hrsdCapabilities: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e8154d980dee938d03da_Frame%2032.svg",
    title: "Employee Center Pro",
    description:
      "Unified service portal that provides a modern interface for the employee.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5297c5278494a5d254d_Frame%2032%20(1).svg",
    title: "HR Knowledge Management",
    description:
      "Ensure HR Knowledge helps employees find answers to their questions.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e815cccf026ae13b9695_Frame%2032%20(1).svg",
    title: "HR Catalog",
    description:
      "The HR Catalog in Employee Center Pro, displays the HR Services an employee can request from HR.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68272152709f6fa4970a7938_Frame%2032.svg",
    title: "HR Dashboards and Reports",
    description:
      "HR Dashboards show performance metrics and employee satisfaction ratings, while the Reports module allows viewing and creating reports.",
  },
   {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e8153c75a59ac7138074_Frame%2032%20(2).svg",
    title: "HR Integrations",
    description:
      "Pull employee data from an external HCM system and push updates back.",
  }, {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e8151c58e72b6fb21e01_Frame%2032%20(3).svg",
    title: "Performance Analytics",
    description:
      "HR Performance Analytics content packs create widgets to track KPI trends",
  }, {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826e815141402915ccdca12_Frame%2032%20(4).svg",
    title: "Employee Journey Management",
    description:
      "Employee Journey Management enhances each employee’s unique experiences through their career.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5299bd943a086d98301_Icon.svg",
    title: "HR Surveys",
    description:
      "HR Surveys allow employees to rate their satisfaction with HR case resolution and provide feedback on HR processes.",
  },
];
export const csmCapabilities: ChallengeItem[] = [
  {
    id: "cm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160ec9e0f15c79d1cd88b_Frame%2032%20(6).svg",
    title: "Case Management",
    description:
      "Refine processes to direct requests quickly and effectively.",
  },
  {
    id: "km",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae5297c5278494a5d254d_Frame%2032%20(1).svg",
    title: "Knowledge Management",
    description:
      "Relevant information for faster analysis and better experience.",
  },
  {
    id: "omni",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dec8175e906d8d7c6e_Frame%2032%20(8).svg",
    title: "Omnichannel Engagement",
    description:
      "Deliver a consistent experience over the phone and email.",
  },
  {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160debfd9a81d89b91153_Frame%2032%20(9).svg",
    title: "Proactive Operations for Customer Service",
    description:
      "Leverage insights to stop problems before they are reported.",
  },
  {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160deaeef9922d6de0352_Frame%2032%20(10).svg",
    title: "Customer Self-Service",
    description:
      "Empower clients with the knowledge base, virtual agent, and self-service portal..",
  },
   {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160de486bab92457f3081_Frame%2032%20(11).svg",
    title: "Field Service Management",
    description:
      "Use intelligent scheduling to manage resources and schedule.",
  },
   {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd3932839f2d6a4c60_Frame%2032%20(12).svg",
    title: "Workforce Optimization",
    description:
      "Increase productivity with real-time resource allocation and skill routing.",
  },
  {
    id: "pbm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160defb176b623b2e8778_Icon%20(2).svg",
    title: "Performance Analytics",
    description:
      "Track metrics to drive improvement and customer satisfaction.",
  },
];


export const irmCustomerBenefits: ChallengeItem[] = [
  {
    id: "erv",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862268715ff17cd3ced5f21_Frame%2032%20(51).svg",
    title: "Enhanced Risk Visibility and Control",
    description:
      "By centralizing risk and compliance data, ServiceNow IRM provides comprehensive visibility, enabling organizations to better understand and control their risk landscape.",
  },
  {
    id: "iew",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862268755338741c4d65fcd_Icon%20(6).svg",
    title: "Improved Efficiency with Automated Workflows",
    description:
      "IRM automates key risk management processes, freeing up resources and allowing teams to focus on strategic initiatives rather than manual compliance tasks.",
  },
  {
    id: "ddpm",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68622687ad211f5fc819ca78_Frame%203465873%20(4).svg",
    title: "Data-Driven, Proactive Decision Makin",
    description:
      "With real-time risk insights and predictive analytics, IRM allows organizations to make informed, proactive decisions that align with their risk tolerance and business objectives.",
  },
  {
    id: "streamlined",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686226876ba127b9f01e07e3_Frame%203465874%20(4).svg",
    title: "Streamlined Compliance Management",
    description:
      "ServiceNow IRM simplifies regulatory compliance with continuous monitoring, automated assessments, and real-time compliance tracking, reducing the risk of non-compliance and associated penalties.",
  },
];
export const secopsCustomerBenefits: ChallengeItem[] = [
  {
    id: "actr",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234a93b18b514fbd5ce2c_Frame%2032%20(51).svg",
    title: "Accelerated Threat Response",
    description:
      "By automating incident response and prioritizing threats based on risk, SecOps helps security teams respond faster, minimizing the potential impact of attacks.",
  },
  {
    id: "collab",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234aa51f54f6dc09d466e_Icon%20(6).svg",
    title: "Enhanced Collaboration between Security and IT",
    description:
      "ServiceNow SecOps connects security and IT teams, fostering collaboration to manage and resolve security incidents more effectively.",
  },
  {
    id: "ctv",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234a826ee7d55e52646b0_Frame%203465873%20(4).svg",
    title: "Reduced Alert Fatigue",
    description:
      "With intelligent alert prioritization, SecOps helps teams focus on the most critical threats, reducing noise and improving focus on high-risk incidents.",
  },
  {
    id: "ctv",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686234a851aad8dcfc624852_Frame%203465874%20(4).svg",
    title: "Comprehensive Threat Visibility",
    description:
      "ServiceNow SecOps consolidates threat intelligence and integrates with existing security tools, giving teams a holistic view of security incidents and enabling faster, data-driven decision-making.",
  },
];
export const fsmCustomerBenefits: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862323791a8595324533a22_Frame%2032%20(51).svg",
    title: "Increased First-Time Fix Rate",
    description:
      "By matching tasks with the right technicians and providing relevant job details upfront, FSM helps increase first-time fix rates, reducing the need for repeat visits.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231fe26ee7d55e524c904_Icon%20(6).svg",
    title: "Optimized Resource Utilization",
    description:
      "FSM’s intelligent scheduling and dispatching maximize the productivity of field resources, reducing downtime and ensuring optimal resource allocation.",
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231fe70aa68bc215d3064_Frame%203465873%20(4).svg",
    title: "Enhanced Customer Satisfaction",
    description:
      "With faster response times, real-time updates, and higher service quality, FSM improves the customer experience and strengthens trust in your organization’s field services.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231fe495e7b44f0202fe9_Frame%203465874%20(4).svg",
    title: "Improved Field Visibility and Control",
    description:
      "FSM’s real-time tracking and reporting tools provide insights into field operations, helping organizations make data-driven decisions and optimize workflows.",
  },
];

export const wsdCustomerBenefits: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686237cc5264180d04f66e53_Frame%2032%20(51).svg",
    title: "Improved Employee Experience and Satisfaction",
    description:
      "By offering one easy-to-use platform for workplace services, WSD improves access and ease, boosting employee satisfaction and engagement.",
  },
  {
    id: "CLM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686231fe26ee7d55e524c904_Icon%20(6).svg",
    title: "Increased Operational Efficiency",
    description:
      "WSD automates routine workplace processes, allowing facility teams to manage requests more efficiently and focus on higher-impact initiatives."
  },
  {
    id: "CALM",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686237ccfdc7bcd0adbf34e0_Frame%203465873%20(4).svg",
    title: "Optimized Space Utilization and Resource Allocation",
    description:
      "With insights into space use and asset usage, WSD helps organizations make data-driven decisions to optimize resources and improve workplace efficiency.",
  },
  {
    id: "LAVUI",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686237ccac23a465a55b3896_Frame%203465874%20(4).svg",
    title: "Data-Driven Workplace Management",
    description:
      "WSD’s reports and analytics provide real-time insights into workplace trends, helping facility teams track performance, and improve services.",
  },
];


export interface ConsiderationItem {
  icon: string; // Using string for icon names to be more flexible
  title: string;
  description: string;
}

// Export as 'considerations' to match the import in Considerations component
export const considerations: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f67b0a432169f88b1_Frame%2032%20(44).svg",
    title: "Stakeholder Alignment",
    description:
      "Engage executives and key stakeholders early to align expectations, define success criteria, and secure sponsorship for the SPM journey.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f86ccc21ad05e3629_Frame%2032%20(45).svg",
    title: "Portfolio Strategy and Governance",
    description:
      "Establish clear prioritization, funding models, and decision frameworks to ensure work delivers measurable strategic value.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b9079e1334ba53675a0_Frame%2032%20(46).svg",
    title: "Data Quality and Integration",
    description:
      "Plan for high‑quality data, taxonomy standards, and integrations with core systems to enable accurate insights and automation.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f53b40f35f123916a_Frame%2032%20(47).svg",
    title: "Customization vs. Out-of-the-Box Configuration",
    description:
      "Balance customization and utilizing out-of-the-box options to prevent unnecessary complexity and maintain compatibility for future upgrades.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f407518f7e38837a0_Frame%2032%20(48).svg",
    title: "Resource Management and Capacity Planning",
    description:
      "Utilize resource management tools to monitor availability, assess skills, gauge demand, and facilitate efficient capacity planning.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8fe4c22ea616c1c19f_Frame%2032%20(49).svg",
    title: "User Training and Adoption",
    description:
      "Train end-users, particularly those in key roles, and supply support materials to facilitate successful adoption of the platform.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f3a91ffcdc2171192_Frame%2032%20(50).svg",
    title: "Continuous Improvement and Feedback Loops",
    description:
      "Regularly evaluate ServiceNow SPM by gathering user feedback, tracking KPIs, and refining processes to meet evolving business needs.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4b8f8bc56d769efd6eb0_Frame%2032%20(51).svg",
    title: "Risk and Issue Management",
    description:
      "Define risk tracking, management, and mitigation within the platform to ensure projects stay on course and remain aligned.",
  },
];

// Keep spmconsiderations export if needed elsewhere
export const spmconsiderations = considerations;

// ITSM-specific considerations
export const itsmConsiderations: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea291004ab3722c89efd_Frame%2032.svg",
    title: "Defining Clear Objectives",
    description:
      "What is driving the adoption of ITSM, and what are the expected key results?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae657342cbd3edf2001b4_Frame%2032%20(2).svg",
    title: "Process Alignment",
    description:
      "Are your IT processes aligned with ITIL best practices? What are the gaps?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea29c7966adbb7942621_Frame%2032%20(1).svg",
    title: "Governance Model",
    description: "Do you have a governance structure to maintain the platform?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a37553d56b320344ff322_Frame%2032%20(34).svg",
    title: "Business Impact Analysis",
    description:
      "How will adopting ServiceNow ITSM impact the various departments or business groups?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea284b0f43076e18ae2e_Frame%2032%20(3).svg",
    title: "Data Accuracy",
    description:
      "Do you have accurate data to create an efficient and effective CMDB?.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a37550f6985e838599717_Frame%2032%20(35).svg",
    title: "Scalability",
    description:
      "Do you need to consider scalability to support your organization’s growth?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755325ea25d12c59b16_Frame%2032%20(36).svg",
    title: "Integration Needs",
    description:
      "Do you have third-party tools or legacy systems that need integration with ServiceNow?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755f588f3486c27e413_Frame%2032%20(37).svg",
    title: "User Training",
    description:
      "Do you need end-users and IT staff training to adopt and effectively use ITSM?",
  },
];
export const hrsdConsiderations: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea291004ab3722c89efd_Frame%2032.svg",
    title: "Defining Clear Objectives",
    description:
      "What drives ServiceNow HRSD adoption, and what improvements do you aim for in HR operations?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae657342cbd3edf2001b4_Frame%2032%20(2).svg",
    title: "Process Alignment",
    description:
      "Do your HR processes follow industry best practices? What inefficiencies need fixing?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea29c7966adbb7942621_Frame%2032%20(1).svg",
    title: "Governance Model",
    description:
      "Does your HRSD platform have a governance framework for maintenance and growth?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea289cb0fcc3a6667f89_Frame%2032%20(2).svg",
    title: "Business Impact Analysis",
    description:
      "What effects do you expect on compliance, HR productivity, and employee experience?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea284b0f43076e18ae2e_Frame%2032%20(3).svg",
    title: "Data Accuracy",
    description:
      "Do you have accurate employee data for HR case management, onboarding, and other services?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea28023207ac37ed4f2b_Frame%2032%20(4).svg",
    title: "Scalability",
    description:
      "Do you need to consider long-term scalability to support your organization’s growth?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea286ecdab27b08e1c2e_Frame%2032%20(5).svg",
    title: "Integration Needs",
    description:
      "Do you currently have third-party tools or legacy systems that need integration with ServiceNow?",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea283476ea323ae78396_Frame%2032%20(6).svg",
    title: "User Training",
    description:
      "Do you require end-users and HR staff training to adopt and effectively use HRSD?",
  },
];
export const itamOfferings: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68622475b9f60d52626b7721_Frame%2032%20(51).svg",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686224753cebce52e43b8fcb_Icon%20(6).svg",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862247515ff17cd3cec7e6b_Frame%203465873%20(4).svg",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686224753b18b514fbccd8c7_Frame%203465874%20(4).svg",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862247570aa68bc2155d6db_Frame%2032%20(52).svg",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68622475261a9bc6da23e62a_Icon%20(7).svg",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862247516fcc21f1e8da422_Frame%203465873%20(5).svg",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68622475bc26fca84c4e4079_Frame%203465874%20(5).svg",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];

export const itomOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "/icons/data.png",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "/icons/customization.png",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "/icons/resource.png",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "/icons/improvement.png",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "/icons/risk.png",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];
export const irmOfferings: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862272373cdea0c17892fdd_Frame%2032%20(52).svg",
    title: "Risk Management",
    description:
      "Identify, assess, and monitor risks across your organization with a centralized risk management solution. Risk Management helps prioritize risks based on impact, providing insights into potential threats and enabling effective risk mitigation.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862272375b096f262a0cf93_Icon%20(7).svg",
    title: "Policy and Compliance Management",
    description:
      "Maintain, update, and enforce policies to ensure regulatory compliance. Policy and Compliance Management enables organizations to automate policy distribution, track compliance, and monitor the effectiveness of controls.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862272475b096f262a0cfac_Frame%203465873%20(5).svg",
    title: "Audit Management",
    description:
      "Streamline audit processes with a centralized platform for planning, conducting, and reporting audits. Audit Management helps organizations reduce audit preparation time and improve audit accuracy and effectiveness.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862272397fa785824653b00_Frame%203465874%20(5).svg",
    title: "Vendor Risk Management (VRM)",
    description:
      "Identify and mitigate risks associated with third-party vendors. Vendor Risk Management assesses vendor compliance, tracks performance, and provides a framework for managing vendor-related risks effectively.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68622723ad211f5fc81a0d1c_Frame%2032%20(53).svg",
    title: "Business Continuity Management (BCM)",
    description:
      "Ensure operational resilience with a business continuity plan that addresses potential disruptions. BCM provides a structured approach to disaster recovery, helping organizations remain resilient in the face of unexpected events.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862273e75f1889a9c6ec98a_Icon%20(8).svg",
    title: "Operational Risk Management",
    description:
      "Manage operational risks within a unified platform. Operational Risk Management allows organizations to assess risk exposure across operations and respond quickly to prevent disruptions.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686227240d52fc2fb3a75ed9_Frame%203465873%20(6).svg",
    title: "Continuous Control Monitoring (CCM)",
    description:
      "Automate the testing and monitoring of controls, ensuring they operate effectively. CCM provides real-time data to help teams identify control weaknesses and address them promptly.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686227234b7de7ee7d25aeec_Frame%203465874%20(6).svg",
    title: "Regulatory Change Management",
    description:
      "Track and respond to regulatory changes with ease. Regulatory Change Management enables organizations to keep up with evolving regulations and ensure that policies and controls remain aligned.",
  },
];

export const fsmOfferings: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b0446e9639628c1fc0_Frame%2032%20(51).svg",
    title: "Intelligent Scheduling and Dispatching",
    description:
      "Automate task assignments based on technician skills, location, availability, and workload. Intelligent scheduling ensures that the right resources are in the right place at the right time, improving efficiency.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b008961663aa8339fd_Icon%20(6).svg",
    title: "Mobile Field Service App",
    description:
      "Provide technicians with a mobile-friendly app that offers access to job details, checklists, and relevant knowledge articles. The app lets technicians stay connected, update job status in real-time, and access support when needed.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b00a6b9fa56926ad63_Frame%203465873%20(4).svg",
    title: "Work Order Management",
    description:
      "Streamline work order creation, assignment, and tracking. Work Order Management centralizes field service data, enabling teams to efficiently coordinate tasks, monitor progress, and close work orders.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68621fae26ee7d55e51b829e_Frame%2032%20(53).svg",
    title: "Asset and Inventory Management",
    description:
      "Track and manage field assets and inventory levels in real-time. Asset and Inventory Management helps ensure technicians have the necessary parts and tools on-site, reducing delays and increasing job completion rates.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b0e222be0bc85f7aca_Frame%2032%20(52).svg",
    title: "Customer Communications",
    description:
      "Keep customers informed with automated appointment reminders, real-time updates on technician arrival, and follow-up notifications. Customer Communications improves transparency, enhancing customer satisfaction.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b0e222be0bc85f7aca_Frame%2032%20(52).svg",
    title: "Knowledge and Training Integration",
    description:
      "Provide technicians access to knowledge articles, troubleshooting guides, and training resources. Knowledge and Training Integration ensures technicians have the information they need to solve issues effectively on the first visit.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b01a3d05540ff568db_Frame%203465873%20(5).svg",
    title: "Service Level Agreement (SLA) Tracking",
    description:
      "Monitor and enforce SLAs to meet customer expectations. SLA Tracking enables teams to prioritize tasks based on urgency and ensure that field service aligns with agreed-upon performance standards.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686232b17875f71b0349746d_Frame%203465874%20(5).svg",
    title: "Performance Analytics and Reporting",
    description:
      "Measure field service performance with dashboards and reports on key metrics such as first-time fix rate, job completion time, and customer satisfaction. Performance Analytics provides insights for continuous improvement.",
  },
];

export const wsdOfferings: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623882b961453c1e040d6c_Frame%2032%20(51).svg",
    title: "Workplace Reservation Management",
    description:
      "Enable employees to book rooms, desks, and other shared spaces with ease. Workplace Reservation Management shows real-time availability, making it simple to find and reserve what they need.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686238825008fda238556582_Icon%20(6).svg",
    title: "Employee Service Center",
    description:
      "Give employees a single self-service portal for all workplace requests, from room bookings to maintenance. The Employee Service Center streamlines access and ensures a consistent experience.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623882399d3d68e663fb24_Frame%203465873%20(4).svg",
    title: "Move Management",
    description:
      "Coordinate employee relocations and seating plans with efficiency. Move Management simplifies the relocation process and ensures a smooth transition with minimal disruption.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686238827aa637916bb6b244_Frame%203465874%20(4).svg",
    title: "Space Management",
    description:
      "Gain visibility into workspace usage and occupancy with real-time data on office space utilization. Space Management helps organizations optimize layouts, identify underused areas, and reduce operational costs",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686238820c396bf55089d437_Frame%2032%20(52).svg",
    title: "Facilities and Maintenance Management",
    description:
      "Automate facility requests and simplify maintenance flow to ensure quick responses and issue resolution. Facilities and Maintenance Management improves service and supports a proactive approach to workplace operations.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623882e1c01aef51fe638a_Icon%20(7).svg",
    title: "Workplace Safety Management",
    description:
      "Ensure a safe work environment by managing safety protocols, tracking compliance, and addressing health and safety requests. Workplace Safety Management enables organizations to maintain a safe, compliant workplace.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623882c1b8eecc043acd5c_Frame%203465873%20(5).svg",
    title: "Visitor Management",
    description:
      "Simplify the visitor experience with a fast, streamlined check-in process. Visitor Management helps track guest information, ensures security protocols are being met, and provides a more welcoming experience for visitors.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686238825264180d04f6c9ae_Frame%203465874%20(5).svg",
    title: "Mobile Workplace App",
    description:
      "Provide employees with mobile access to workplace services, allowing them to make reservations, request services, and receive updates on the go. The Mobile Workplace App enhances accessibility and supports flexible work arrangements.",
  },
   {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623882446e9639628fb2d7_Frame%203465873%20(6).svg",
    title: "Analytics and Reporting for Workplace Services",
    description:
      "Monitor key metrics such as occupancy rates, service request volumes, and response times. Analytics and Reporting provide actionable insights to improve service quality and optimize resource allocation.",
  },
];
export const secopsOfferings: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623558a49835296c7caaaa_Frame%2032%20(51).svg",
    title: "Security Incident Response (SIR)",
    description:
      "Streamline and automate the entire security incident lifecycle, from detection to resolution. SIR enables rapid investigation, prioritization, and response to incidents, improving overall efficiency.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623558760421706880ce5c_Icon%20(6).svg",
    title: "Vulnerability Response (VR)",
    description:
      "Identify, prioritize, and remediate vulnerabilities across your environment. Vulnerability Response integrates with IT asset management and threat intelligence sources to enable risk-based prioritization and timely remediation.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862355875f1889a9c76a257_Frame%203465874%20(4).svg",
    title: "Threat Intelligence",
    description:
      "Aggregate and analyze threat intelligence from multiple sources in one platform. ServiceNow Threat Intelligence enriches security incidents with relevant data, enabling teams to respond faster and more effectively.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862355875f1889a9c76a257_Frame%203465874%20(4).svg",
    title: "Security Orchestration, Automation, and Response (SOAR)",
    description:
      "Leverage automation and orchestration capabilities to streamline incident response workflows. SOAR enables your team to automate common tasks, such as data enrichment, containment, and remediation, reducing the need for manual intervention.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623558b961453c1e023995_Frame%2032%20(52).svg",
    title: "Risk Management Integration",
    description:
      "Integrate SecOps with ServiceNow Risk Management to assess and manage security risks within a broader risk framework. This integration ensures that security initiatives are aligned with organizational risk management strategies.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623558ab82ec27beee2081_Icon%20(7).svg",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Link SecOps with the CMDB to understand the relationships between security incidents and assets. CMDB integration provides context on affected assets and services, enabling faster impact analysis and response.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6862355890b2d4401f687b6b_Frame%203465873%20(5).svg",
    title: "Threat Hunting",
    description:
      "Enable proactive threat detection through custom threat hunting capabilities. ServiceNow’s threat hunting tools help identify potential threats before they evolve into critical incidents.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/686235589ce7caa52f27a983_Frame%203465874%20(5).svg",
    title: "Performance Analytics for Security",
    description:
      "Track and measure the performance of security operations with real-time dashboards and reporting. Performance Analytics provides visibility into incident response times, vulnerability closure rates, and overall security posture.",
  },
];
export const csmConsiderations: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea291004ab3722c89efd_Frame%2032.svg",
    title: "Defining Objectives",
    description:
      "cTransform customer service and define success metrics with established goals.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682ae657342cbd3edf2001b4_Frame%2032%20(2).svg",
    title: "Understanding Customer Journeys",
    description:
      "Map customer interactions to find challenges and areas for improvement.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd3e64bb4b8d3d9fa3_Frame%2032%20(14).svg",
    title: "Integration with Existing Systems",
    description:
      "Ensure seamless ServiceNow CSM integration with your tools.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd6a857d55586708cc_Frame%2032%20(15).svg",
    title: "Data Quality and Accuracy",
    description:
      "Assess data quality for efficient, individualized service delivery.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/6826ea284b0f43076e18ae2e_Frame%2032%20(3).svg",
    title: "Scalability",
    description:
      "Identify future business needs and plan platform development accordingly.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd22f2edede0686233_Frame%2032%20(16).svg",
    title: "Employee Training",
    description:
      "Ensure employees are adequately trained to leverage the power of platform in serving customer.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160e09b8fe77bee40df15_Frame%2032%20(18).svg",
    title: "Compliance and Security",
    description:
      "Identify compliance requirements and ensure legal adherence during development.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd4309981e72fa579b_Frame%2032%20(17).svg",
    title: "Omnichannel Strategy",
    description:
      "Plan and create communication strategies to leverage the full power of omnichannel.",
  },
];
export const itomConsiderations: ConsiderationItem[] = [
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623d25ffd1f65510824eae_Frame%2032%20(51).svg",
    title: "Alignment with ITIL Best Practices",
    description:
      "Ensure your IT operations align with ITIL (Information Technology Infrastructure Library) standards to achieve maximum benefits.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623d2516381b9f41e87aed_Icon%20(6).svg",
    title: "Cloud Strategy",
    description:
      "Assess your organization’s cloud usage and ensure ServiceNow ITOM integrates effectively with public, private, or hybrid cloud environments.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623d25910ece62eb87ac63_Frame%203465873%20(4).svg",
    title: "Scalability",
    description:
      "As your organization expands, ensure the ITOM solution can effectively scale to handle increased complexity and additional infrastructure components.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623d25575eb6d6405234b1_Frame%203465874%20(4).svg",
    title: "Integration with Existing Tools",
    description:
      "Identify third-party tools or legacy systems that are required to integrate with ServiceNow ITOM to ensure a seamless flow of data.",
  },
  {
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623d25a2e535d57f00299f_Icon%20(7).svg",
    title: "User Adoption and Training",
    description:
      "Equip your teams with the proper knowledge and training to effectively use ITOM features for faster troubleshooting and better decision-making.",
  },
];

// FAQ data interface and arrays
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  imageSrc: string;
}

export const itsmFaqs: FaqItem[] = [
  {
    id: "incident-management",
    question: "Discovery and Tailored Strategy",
    answer:
      "We begin with your current IT environment by understanding key pain points, identifying areas for improvement to develop a tailored strategy, and aligning ServiceNow’s capabilities with your unique requirements.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "service-catalog",
    question: "Solution Design",
    answer:
      "Our experts design a solution blueprint for configuration and integration with your existing systems and workflows. Every element is meticulously planned to ensure seamless adoption and long-term success..",
    imageSrc: "/solutionfaq.jpg",
  },
  {
    id: "Implementation and Testing",
    question: "Implementation and Testing",
    answer:
      "Our team manages all implementation aspects, from configuring modules to setting up the CMDB and integrating necessary applications. We rigorously test each component to ensure reliability and readiness for launch.",
    imageSrc: "/implementation.png",
  },
  {
    id: "knowledge-base",
    question: "User Training and Engagement",
    answer:
      "Our training ensures your team fully understands and benefits from the platform’s features, driving high adoption rates. We also provide role-based training sessions to empower your team.",
    imageSrc: "/testing.jpg",
  },
  {
    id: "sla-management",
    question: "Go-Live Support and Continuous Optimization",
    answer:
      "We support your team as they transition to the new platform with a smooth go-live process. Our post-implementation services include troubleshooting, guidance, and optimization recommendations.",
    imageSrc: "/livesupport.jpg",
  },
  {
    id: "lifecycle-management",
    question: "Long-Term Partnership",
    answer:
      "As business grows, so do IT needs. As a trusted partner, we are committed to help you adjust, scale, and optimize ServiceNow ITSM so it continues to deliver measurable business value.",
    imageSrc: "/ltmpartnersip.jpg",
  },
];

export const itamFaqs: FaqItem[] = [
  {
    id: "asset-discovery",
    question: "Discovery and Requirement Assessment",
    answer:
      "We begin by evaluating your organization's current asset management practices, identifying gaps, and understanding your business needs. This assessment helps us design a solution that fully aligns ITAM's capabilities with your objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80", // business analysis
  },
  {
    id: "solution-design",
    question: "Solution Design and Customization",
    answer:
      "Based on our assessment, we design a ServiceNow ITAM solution that meets your specific needs. This includes configuring modules, defining workflows, and setting up integrations with your existing systems for a seamless asset management experience",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", // blueprint / design
  },
  {
    id: "implementation-testing",
    question: "Implementation and Configuration",
    answer:
      "Our team manages the end-to-end deployment, including configuring key ITAM modules such as HAM, SAM, and Contract Management. We ensure the CMDB integration is optimized to maintain accurate asset relationships and dependencies.",
    imageSrc:
      "https://www.optiproerp.com/wp-content/uploads/The-Difference-Between-Configuration-and-Customization-in-ERP-Implementation.png", // server setup / configuration
  },
  {
    id: "user-training",
    question: "User Training and Adoption Support",
    answer:
      "We provide targeted training sessions to equip your team with the knowledge to manage ITAM effectively. Our training ensures that all stakeholders can leverage ITAM's functionalities, driving high adoption and smooth operations.",
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80", // team training
  },
  {
    id: "go-live-support",
    question: "Go-Live and Support",
    answer:
      "Our go-live support ensures a smooth transition to ServiceNow ITAM, with continuous guidance as your team begins using the platform. We provide post-implementation support to address any challenges and help optimize performance.",
    imageSrc:
      "/livesupport.jpg", // IT support team
  },
  {
    id: "ongoing-optimization",
    question: "Ongoing Optimization and Partnership",
    answer:
      "As your organization evolves, our partnership extends to continuous improvement, offering support to scale, optimize, and adapt ServiceNow ITAM to meet new requirements, ensuring sustained value from your asset management investment.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80", // business growth / partnership
  },
];

export const spmFaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Defining Strategic Portfolio Management Vision and Goals",
    answer:
      "Defining Strategic Portfolio Management goals involves aligning projects with strategy, setting clear objectives, and establishing KPIs to ensure portfolio success and value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "ServiceNow SPM Solution Design and Architecture",
    answer:
      "ServiceNow SPM Solution Design creates a scalable, flexible system that aligns with organizational needs, integrates with existing tools, and optimizes platform performance.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Project Delivery Methodology for SPM Implementation",
    answer:
      "Agile Project Delivery for SPM emphasizes iterative sprints, teamwork, and the ongoing delivery of value. This approach ensures flexibility, quicker adaptation, and alignment with changing business priorities.",
    imageSrc: "/agile.jpg",
  },
  {
    id: "integrations",
    question: "Data Governance, Security, and Compliance in SPM",
    answer:
      "Data governance, security, and compliance in SPM play a crucial role in managing data effectively, meeting regulatory requirements, and establishing strong security measures to protect sensitive information throughout the portfolio management process.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Optimization of Resource and Financial Management in SPM",
    answer:
      "Optimizing resource and economic management in SPM requires effective resource allocation, alignment with organizational goals, and financial forecasting to maintain budget control and enhance portfolio ROI.",
    imageSrc: "/optimization.jpg",
  },
   {
    id: "end-to-end",
    question: "End-to-End Portfolio Lifecycle Management",
    answer:
      "End-to-End Portfolio Lifecycle Management spans from idea generation to execution, focusing on project prioritization, resource optimization, and continuous portfolio reviews to ensure alignment with evolving business objectives and sustained value delivery.",
    imageSrc: "/portfolio.jpg",
  },
];

export const irmFaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Initial Assessment and Requirement Analysis",
    answer:
      "We begin by assessing your current risk and compliance landscape, identifying key challenges, and understanding your objectives. This enables us to design an IRM solution tailored to meet your organization’s specific needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Configuration",
    answer:
      "Based on our analysis, we design a customized IRM solution. This includes configuring core modules like Risk Management, Compliance, and Vendor Risk Management, and defining workflows to streamline your organization’s risk and compliance practices.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "agile-delivery",
    question: "Implementation and Integration",
    answer:
      "Our team oversees the complete implementation, ensuring seamless integration with your existing IT ecosystem. We set up key modules, connect with external regulatory sources, and ensure all risk data flows accurately for optimal performance.",
    imageSrc: "/implementation.png",
  },
  {
    id: "integrations",
    question: "Training and Knowledge Transfer",
    answer:
      "We conduct tailored training sessions to help your team effectively manage risks using ServiceNow IRM. Training covers platform features, best practices, and incident response, ensuring your team is well-prepared to leverage the platform.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Go-Live and Support",
    answer:
      "We provide full support during the go-live phase, ensuring that all modules function smoothly and users are confident in using the system. Our team remains on standby for troubleshooting and guidance, ensuring a successful transition.",
    imageSrc: "/livesupport2.jpg",
  },
  {
    id: "long-term-partnership",
    question: "Ongoing Optimization and Strategic Partnership",
    answer:
      "As risk management needs evolve, we partner with your organization to optimize and scale ServiceNow IRM. Our continuous support ensures your IRM solution remains agile, effective, and aligned with regulatory changes.",
    imageSrc: "/optimization.jpg",
  },
];

export const hrsdfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Discovery and HR-Centric Strategy",
    answer:
      "We begin by understanding your strategic aims, employee pain areas, and HR procedures. We map existing workflows (such as onboarding, case management, and service catalog requests) using workshops and stakeholder interviews, and we create a plan that synchronizes ServiceNow HRSD's capabilities with your HR vision, compliance requirements, and employee experience goals.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Employee Experience-First Design",
    answer:
      "Our experts created a solution to streamline HR communications by setting up user-friendly knowledge bases, HR case management, employee portals, and automation for tasks like leave requests and benefits. To guarantee smooth data flow and a cohesive experience, we give top priority to connections with your payroll systems, HRIS (such as Workday or SAP), and collaboration platforms like Microsoft Teams.",
    imageSrc: "/emplyeeexp.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Implementation and Rigorous Testing",
    answer:
      "We configure ServiceNowHRSD modules (Workplace Service Delivery, HR Service Delivery, Employee ServiceCenter) to automate procedures, cut down on manual labor, and guarantee compliance. Key tasks include role-based access controls, omnichannel support (email, chatbots, portal), and HR service catalog creation. Each process and integration are evaluated for accuracy, security, and scalability.",
    imageSrc: "/agile.jpg",
  },
  {
    id: "integrations",
    question: "Change Management and Role-Based Enablement",
    answer:
      "We drive adoption with specialized training for managers, staff, and HR teams on knowledge base use, case submission, portal navigation, and manager self-service (e.g., performance reviews, team onboarding). Comprehensive FAQs and interactive demos build confidence in the new system.",
    imageSrc: "/changemanagement.jpg",
  },
  {
    id: "optimization",
    question: "Launch Excellence and Continuous Improvement",
    answer:
      "We offer hyper care aid during go-live to handle employee and HR inquiries, track case response patterns, and streamline processes. To enhance service delivery and customer happiness, we examine KPIs (such as case resolution time and portal engagement) and make necessary configuration adjustments after launch.",
    imageSrc: "/launchexc.jpg",
  },
   {
    id: "long-term-partnership",
    question: "Ongoing Partnership for HR Evolution",
    answer:
      "We help you adapt ServiceNow HRSD as your workforce and HR policies evolve—whether expanding, adding services like wellness programs, or complying with new regulations like GDPR and labor laws. We ensure it remains a valuable tool for enhancing employee engagement and HR efficiency.",
    imageSrc: "/partnership.jpg",
  },
];

export const itomfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Discovery and Strategy",
    answer:
      "We begin by understanding your current IT environment, identifying pain points, and aligning ServiceNow ITOM features to your organization’s objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "solution-design",
    question: "Solution Design",
    answer:
      "We work with you to design a solution that integrates with existing systems, aligns with best practices, and prepares your organization for scalable success.",
    imageSrc:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80", // sticky-notes/UX planning
  },
  {
    id: "implementationtesting",
    question: "Implementation and Testing",
    answer:
      "Our team manages all implementation aspects, from configuring modules to setting up the CMDB and integrating necessary applications. We rigorously test each component to ensure reliability and readiness for launch.",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", // coding/testing on monitors
  },
  {
    id: "ute",
    question: "User Training and Engagement",
    answer:
      "Our training ensures your team fully understands and benefits from the platform’s features, driving high adoption rates. We also provide role-based training sessions to empower your team.",
    imageSrc:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gls&co",
    question: "Go-Live Support and Continuous Optimization",
    answer:
      "We support your team as they transition to the new platform with a smooth go-live process. Our post-implementation services include troubleshooting, guidance, and optimization recommendations.",
    imageSrc:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "LTP",
    question: "Long-Term Partnership",
    answer:
      "As business grows, so do IT needs. As a trusted partner, we are committed to help you adjust, scale, and optimize ServiceNow ITSM so it continues to deliver measurable business value.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const secopsfaqs: FaqItem[] = [
  {
    id: "assessment",
    question: "Assessment and Requirements Gathering",
    answer:
      "We begin by conducting a thorough assessment of your current security processes, identifying gaps and understanding your organization’s risk landscape. This assessment forms the foundation for configuring SecOps to meet your unique security needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Customization",
    answer:
      "Based on our assessment, we design a ServiceNow SecOps solution tailored to your requirements. This includes configuring modules such as Security Incident Response, Vulnerability Response, and Threat Intelligence, and integrating with existing security tools for a cohesive security environment.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "implementationtesting",
    question: "Implementation and Integration",
    answer:
      "Our team oversees the implementation process, including setting up SecOps modules, integrating with threat intelligence feeds, and connecting to the CMDB. We ensure that all components are tested and optimized for seamless performance.",
    imageSrc: "/implementation.png",
  },
  {
    id: "training",
    question: "User Training and Knowledge Transfer",
    answer:
      "To empower your team, we provide in-depth training on ServiceNow SecOps modules, incident response workflows, and best practices. Our training sessions are tailored to different roles, ensuring that security and IT teams are well-prepared to leverage SecOps effectively.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "go-live-support",
    question: "Go-Live and Ongoing Support",
    answer:
      "We support your team through the go-live process, providing guidance on initial SecOps use and troubleshooting. Our post-implementation support ensures a smooth transition and helps optimize your SecOps environment for ongoing success.",
    imageSrc: "/livesupport2.jpg",
  },
  {
    id: "continuous-optimization",
    question: "Continuous Optimization and Partnership",
    answer:
      "As new security challenges emerge, we remain a strategic partner, offering continuous optimization services to adapt SecOps capabilities. Our partnership helps you stay ahead of threats and ensures that SecOps aligns with your evolving security requirements.",
    imageSrc: "/optimization.jpg",
  },
];

export const csmfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Solution Design",
    answer:
      "Create a plan for long-term success, integrate systems, and design workflows.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "solution-design",
    question: "Implementation and Testing",
    answer:
      "To ensure ServiceNow, CSM features satisfy your needs, implement, and test them.",
    imageSrc: "/implementation.png",
  },
  {
    id: "agile-delivery",
    question: "Employee Enablement",
    answer:
      "To increase platform adoption, train managers, agents, and other stakeholders.",
    imageSrc: "/optimization.jpg",
  },
  {
    id: "integrations",
    question: "Go-Live Support and Optimization",
    answer:
      "Support your team with post-launch assistance and optimization suggestions.",
    imageSrc: "/livesupport2.jpg",
  },
  {
    id: "optimization",
    question: "Continuous Partnership",
    answer:
      "As you grow, we'll help scale and adjust ServiceNow CSM for continued success.",
    imageSrc: "/partnership.jpg",
  },
];
export const fsmfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Assessment and Requirements Gathering",
    answer:
      "We assess your current field service operations, identify challenges, and understand your goals. This assessment enables us to design a ServiceNow FSM solution tailored to your organization’s needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Configuration",
    answer:
      "Based on the assessment, we configure FSM modules, such as Intelligent Scheduling and Work Order Management, to align with your requirements. We customize workflows and features to support seamless coordination between field and back-office teams.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "agile-delivery",
    question: "Implementation and Integration",
    answer:
      "Our team oversees the complete implementation process, including integrating FSM with existing CRM, ERP, and other systems. We test each component to ensure reliable performance and compatibility across your IT ecosystem.",
    imageSrc: "/implementation.png",
  },
  {
    id: "integrations",
    question: "Technician Training and Knowledge Transfer",
    answer:
      "We provide comprehensive training for field technicians and support staff, covering key FSM features, mobile app usage, and best practices. Training ensures that your team can effectively leverage FSM in daily operations.",
    imageSrc: "/kt.jpg",
  },
  {
    id: "go-live-support",
    question: "Go-Live and Post-Implementation Support",
    answer:
      "During the go-live phase, we support your team with troubleshooting and guidance. Our post-implementation support ensures that FSM is fully operational, enabling your team to maximize its capabilities from day one.",
    imageSrc: "/livesupport.jpg",
  },
    {
    id: "optimization",
    question: "Ongoing Optimization and Partnership",
    answer:
      "As your field service needs evolve, we offer continuous optimization services to adapt FSM capabilities. Our partnership helps you unlock the full potential of FSM, ensuring consistent improvement and alignment with changing business requirements.",
    imageSrc: "/optimization.jpg",
  },
];

export const wsdfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Assessment and Requirement Gathering",
    answer:
      "We begin by analyzing your current workplace processes, identifying pain points, and understanding your objectives. This assessment enables us to design a WSD solution tailored to your organization’s needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Configuration",
    answer:
      "Based on the assessment, we configure core WSD modules like Workplace Reservation, Facilities Management, and Space Management. We tailor workflows to support seamless, efficient operations.",
    imageSrc: "/solutiondesign.jpg",
  },
  {
    id: "implementation-testing",
    question: "Implementation and Integration",
    answer:
      "Our team manages the full implementation process, integrating WSD with existing systems like HR and facility tools to ensure a smooth user experience. We test each component for reliable performance.",
    imageSrc: "/implementation.png",
  },
  {
    id: "integrations",
    question: "User Training and Knowledge Transfer",
    answer:
      "To ensure successful adoption, we provide targeted training for facilities teams, employees, and administrators. Our training covers WSD functionalities, self-service tools, and best practices, and powering your team.",
    imageSrc: "/kt.jpg",
  },
  {
    id: "optimization",
    question: "Go-Live and Support",
    answer:
      "During the go-live phase, we offer support and troubleshooting to ensure a smooth transition. Our post-implementation support helps address any challenges and optimizes WSD functionality for effective workplace service management.",
    imageSrc: "/livesupport2.jpg",
  },
   {
    id: "continuous-optimization",
    question: "Continuous Optimization and Partnership",
    answer:
      "As your workplace needs evolve, we provide ongoing support and optimization to ensure WSD continues to meet your goals. Our partnership helps unlock WSD’s full potential, boosting efficiency and employee experience.",
    imageSrc: "/optimization.jpg",
  },
];

// Portfolio Management Excellence data interface and content
export interface PortfolioContentItem {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string;
}

export const spmPortfolio: PortfolioContentItem = {
  title: "Portfolio Management Excellence",
  paragraph1:
    "ServiceNow Strategic Portfolio Management (SPM) transforms how organizations manage their project portfolios by providing comprehensive visibility, strategic alignment, and data-driven decision making capabilities.",
  paragraph2:
    "With SPM, you can optimize resource allocation, track portfolio performance in real-time, and ensure every project contributes to your strategic objectives. The platform enables seamless collaboration across teams while maintaining governance and compliance standards.",
  imageSrc:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80", // strategy / planning meeting
};

export const hrsdPortfolio: PortfolioContentItem = {
  title: "Unlock HR Service Excellence with ServiceNow HRSD",
  paragraph1:
    "By using ServiceNow HR Service Delivery (HRSD), you're turning HR into a strategic, employee-focused operation rather than merely implementing an HR platform. The automation, hyper automation, and unified service delivery features of ServiceNow HRSD enable businesses to remove HR bottlenecks, improve employee experiences, and cultivate a productive and engaged culture.",
  paragraph2:
    "Through the centralization of HR services, including benefits enrollment, onboarding, case management, and workplace requests, ServiceNow HRSD guarantees compliance, provides process visibility, and expands easily to accommodate your workforce's changing demands.",
  imageSrc:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", // HR / teamwork
};

export const itsmPortfolio: PortfolioContentItem = {
  title: "Unlock IT Service Excellence with ServiceNow ITSM",
  paragraph1:
    "With ServiceNow ITSM implementation, you’re not just adopting a service management tool but embracing a fully integrated approach to IT excellence. ServiceNow ITSM automation, visibility, and scalability capabilities empower organizations to reduce downtime, improve efficiency, and enhance customer satisfaction.",
  paragraph2:
    "Let us partner with you to unlock the full potential of ServiceNow ITSM and elevate your IT operations to a new standard of service excellence.",
  imageSrc:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", // IT service desk
};

export const itomPortfolio: PortfolioContentItem = {
  title: "Unlock IT Operations Excellence with ServiceNow ITOM ",
  paragraph1:
    "ServiceNow ITOM delivers intelligent automation, real-time insights, and proactive management, enabling your IT operations to stay ahead of issues and deliver top-tier performance. By reducing downtime, increasing operational efficiency, and enhancing service delivery, ServiceNow ITOM helps transform your IT organization into a highly responsive, data-driven function that drives business success. Partner with us to unlock the full potential of ServiceNow ITOM and elevate your IT operations to new heights.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80", // servers / IT operations
};

export const wsdPortfolio: PortfolioContentItem = {
  title: "Create an Efficient, Employee-Centric Workplace with ServiceNow WSD",
  paragraph1:
    "ServiceNow WSD enables organizations to streamline workplace operations, improve efficiency, and enhance the employee experience. With automated workflows, centralized service access, and data-driven insights, WSD helps create a productive, engaging work environment that meets the needs of modern employees. Let us partner with you to implement and optimize ServiceNow WSD, transforming your workplace management and creating a seamless, efficient experience for your employees.",
  paragraph2: "",
  imageSrc:
    "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68626c95eda4df6f9c8784b5_group-business-executives-discussing-laptop-their-des(1)%20(4).png", // office workplace / smart workplace
};

export const secopsPortfolio: PortfolioContentItem = {
  title: "Strengthen Your Security Posture with ServiceNow Security Operations",
  paragraph1:
    "ServiceNow SecOps empowers your organization with proactive threat detection, automated response, and end-to-end visibility across security and IT operations. By implementing SecOps, you enhance collaboration, improve response times, and reduce the impact of security incidents, protecting your business from potential threats. Let us partner with you to implement and optimize ServiceNow SecOps, transforming your approach to security operations and building a resilient, proactive defense strategy for your organization.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80", // cybersecurity / security operations
};

export const fsmPortfolio: PortfolioContentItem = {
  title: "Deliver Superior On-Site Service with ServiceNow FSM",
  paragraph1:
    "ServiceNow FSM enables organizations to streamline field service operations, enhance productivity, and deliver exceptional customer experiences. With automated scheduling, real-time visibility, and mobile-friendly tools, FSM empowers field teams to work efficiently and resolve issues faster.",
  paragraph2:
    "Let us partner with you to implement and optimize ServiceNow FSM, transforming your field service operations into a reliable, customer-centric function that drives satisfaction and loyalty.",
  imageSrc:
    "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68626b96ba6b7dc6595ca635_group-business-executives-discussing-laptop-their-des(1)%20(2).png", // field engineer on site
};

export const itamPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1:
    "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80", // IT hardware assets (laptops, equipment)
};

export const irmPortfolio: PortfolioContentItem = {
  title: "Integrated Risk Management (IRM)",
  paragraph1:
    "ServiceNow IRM empowers organizations to identify, assess, and mitigate risks proactively while ensuring compliance with industry regulations.",
  paragraph2: "",
  imageSrc: "/testing.jpg", // risk management / compliance dashboard
};

export const csmPortfolio: PortfolioContentItem = {
  title: "Achieve Customer Service Excellence with ServiceNow CSM",
  paragraph1:
    "With ServiceNow CSM, you are not just adopting a tool but embracing a unified, scalable approach to customer service. Transform your customer service operations with automation, visibility, and proactive engagement to improve customer satisfaction, loyalty, and business success.",
  paragraph2: "Let us partner with you to unlock the full potential of ServiceNow CSM and redefine your customer service experience.",
  imageSrc:
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80", // customer support team working
};

export const itamfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Defining Strategic Portfolio Management Vision and Goals",
    answer:
      "Defining Strategic Portfolio Management goals involves aligning projects with strategy, setting clear objectives, and establishing KPIs to ensure portfolio success and value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "ServiceNow SPM Solution Design and Architecture",
    answer:
      "ServiceNow SPM Solution Design creates a scalable, flexible system that aligns with organizational needs, integrates with existing tools, and optimizes platform performance.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Project Delivery Methodology for SPM Implementation",
    answer:
      "Agile Project Delivery for SPM emphasizes iterative sprints, teamwork, and the ongoing delivery of value. This approach ensures flexibility, quicker adaptation, and alignment with changing business priorities.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "integrations",
    question: "Data Governance, Security, and Compliance in SPM",
    answer:
      "Data governance, security, and compliance in SPM play a crucial role in managing data effectively, meeting regulatory requirements, and establishing strong security measures to protect sensitive information throughout the portfolio management process.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Optimization of Resource and Financial Management in SPM",
    answer:
      "Optimizing resource and economic management in SPM requires effective resource allocation, alignment with organizational goals, and financial forecasting to maintain budget control and enhance portfolio ROI.",
    imageSrc: "/images/collaboration_image.jpg",
  },
];

export interface Practice {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const itsmPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755f4fbd2d7fbbbac3f_Frame%2032%20(38).svg",
    title: "Start Small, Then Scale",
    description:
      "Begin with core modules before expanding to advanced capabilities.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755498f6c737cf53327_Frame%2032%20(39).svg",
    title: "Engage Stakeholders",
    description:
      "Establish regular communication with stakeholders throughout the lifecycle.",
  },
  {
    id: "ux",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68271705ca166033dc20d63f_Frame%2032%20(2).svg",
    title: "Focuson User Experience",
    description:
      "Prioritize usability and accessibility for end-users and IT teams for higher adoption.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682717050e18441750036e61_Frame%2032%20(3).svg",
    title: "Automate Repetitive Tasks",
    description:
      "Maximize efficiency with automated workflows for routine tasks.",
  },
  {
    id: "data-quality",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755617322f52fbe6ff6_Frame%2032%20(40).svg",
    title: "Prioritize Data Quality",
    description:
      "Regularly audit and update data in the CMDB to ensure consistency and data accuracy.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg",
    title: "Adopt Agile Methods",
    description:
      "Use iterative agile approaches to develop and deploy for continuous improvements.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg",
    title: "Emphasize Change Management",
    description: "Adopt robust change management for seamless implementation.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Monitor and Optimize",
    description:
      "Leverage Performance Analytics to track KPIs andspot areas for improvements.",
  },
];

export const itomPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Start with Core Modules",
    description:
      "Start with Discovery, Event Management, and CMDB before expanding to Service Mapping and Cloud Management.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddcfdc7bcd0adc29638_Icon%20(6).svg",
    title: "Involve Stakeholders Early",
    description:
      "Engage with business leaders and key IT stakeholders to align IT operations goals with overall business objectives.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddc446e96396292bdb4_Frame%203465873%20(4).svg",
    title: "Automate Where Possible",
    description:
      "Leverage orchestration to automate repetitive processes, allowing IT teams to completely focus on higher-value activities.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddc25dbe443ab1cacf9_Frame%203465874%20(4).svg",
    title: "Monitor and Optimize Continuously",
    description:
      "Leverage ServiceNow’s Performance Analytics and reporting tomonitor IT operations and optimize continuously.",
  },
  {
    id: "eda",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddca2e535d57f009037_Icon%20(7).svg",
    title: "Ensure Data Accuracy",
    description:
      "Maintain an accurate and up-to-date Configuration Management Database (CMDB) for better decision-making and service mapping.",
  },

  {
    id: "agilemethodology",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddcf2141a18f02e0491_Icon%20(8).svg",
    title: "Agile Methodology",
    description:
      "Adopt agile practices for ITOM deployments, enabling iterative improvements and rapid adjustments based on real-time feedback.",
  },
];
export const csmBestPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd30668fabf808da79_Frame%2032%20(19).svg",
    title: "Start With High-Impact Use Cases",
    description:
      "Understand the business to develop a comprehensive use case to demonstrate value.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/684160dd7bd03284c2385907_Frame%2032%20(20).svg",
    title: "Engage Key Stakeholders",
    description:
      "Understand stakeholder needs and challenges for successful solutions delivery."
  },
  {
    id: "financial",
    icon: "",
    title: "Leverage Automation",
    description:
      "Understand processes to enable automation where possible to increase efficiency and reduce cost.",
  },

 
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Prioritize Data Quality",
    description:
      "Identify data sources and understand the data quality to ensure quality information for decision-making.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Emphasize Change Management",
    description:
      "To ensure a smooth adoption process support agents and teams during transitions.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Adopt Agile Implementation",
    description:
      "Employ agile techniques to gradually implement and enhance the solution.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Focus on Continuous Improvement",
    description:
      "To improve client interactions and procedures, evaluate performance on a regular basis."
    },
     {
    id: "kpi-monitoring",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Monitor KPIs and Metrics",
    description:
      "Monitor KPIs such as case resolution time, initial response time, and customer satisfaction (CSAT)."
    },
];
export const hrsdBestPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Start Small, Then Scale",
    description:
      "Implement basic HRSD modules like Case and Knowledge Management, then advancing to Employee Document Management or Virtual Agent.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Engage Stakeholders",
    description:
      "To guarantee alignment and success, include important HR, IT, and business stakeholders early on and keep in continuous contact throughout the implementation.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Focus on User Experience",
    description:
      "To increase adoption and user satisfaction, prioritize the overall user experience while creating an easy-to-use self-service site for HR teams and staff.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Automate Routine Tasks",
    description:
      "ServiceNow HR Service Delivery enhances the employee experience by automating tasks, equipping HR with service tools, and enabling prompt communication.",
  },
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Prioritize Data Quality",
    description:
      "To support HR operations, keep a clean, trustworthy employee data collection and conduct routine audits of the CMDB to guarantee data accuracy and consistency.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Adopt Agile Methods",
    description:
      "Implement HRSD modules using an agile, iterative process to enable ongoing enhancements and prompt adjustments to change business requirements.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Emphasize Change Management",
    description:
      "To ensure seamless adoption and reduce delays, implement a strong change management strategy to guide IT and HR departments in the transition.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Perfect HR Service Delivery",
    description:
      "Track HRSD KPIs like staff satisfaction and case resolution time using performance analytics, then use the results to keep improving procedures.",
  },
];

// SPM Best Practices
export const spmPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Portfolio Alignment with Strategic Goals",
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Agile Portfolio Management",
    description:
      "Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Enhanced Financial Management and Budgeting",
    description:
      "Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.",
  },
  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Automation of Governance and Approval Workflows",
    description:
      "Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.",
  },
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Change Management and Adoption Strategy",
    description:
      "Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Risk Assessment and Mitigation Frameworks",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4cf18f27ac039c64d84c_Frame%2032%20(49).svg",
    title: "Cross-Functional Collaboration and Communication",
    description:
      "Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.",
  },{
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4cf1eda85a5c4e515474_Frame%2032%20(50).svg",
    title: "Performance Analytics and Reporting",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },
];
