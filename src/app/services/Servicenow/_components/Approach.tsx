import React from "react";
import ApproachSection from "./ApproachSection";
import { Gem, ShieldCheck, RefreshCcw , ArrowUpRight , Monitor, Users, TrendingUp, Settings, Server, UserCheck } from "lucide-react";

const approachData = [
  {
    icon: <Gem className="text-[#007ba8] w-12 h-12" />,
    title: "Quality",
    paragraphs: [
      "We adhere to stringent quality standards throughout the service delivery process, beginning with a thorough understanding of your requirements, objectives, and challenges.",
      "We conduct comprehensive assessments and consult with stakeholders to ensure the solutions align with your business goals and operational needs.",
    ],
  },
  {
    icon: <ShieldCheck className="text-[#007ba8] w-12 h-12" />,
    title: "Reliability",
    paragraphs: [
      "We employ best practices and industry standards to design, develop, and deploy ServiceNow solutions throughout the implementation process.",
      "We conduct rigorous testing and validation procedures to ensure the reliability and functionality of the deployed solutions, minimizing the risk of disruptions or errors.",
    ],
  },
  {
    icon: <RefreshCcw className="text-[#007ba8] w-12 h-12" />,
    title: "Consistency",
    paragraphs: [
      "We ensure transparency and visibility and maintain consistency through standardized processes, documentation, and communication channels with clear project milestones, timelines, and deliverables.",
      "We conduct regular status updates, progress reports, and feedback sessions to ensure alignment and proactively address any issues or concerns.",
    ],
  },
   {
    icon: <ArrowUpRight className="text-[#007ba8] w-12 h-12" />,
    title: "Development",
    paragraphs: [
      "We work closely with your team to translate your requirements to configure or customize ServiceNow applications, workflows, and modules into tangible solutions for your business.",
      "With App Engine and development tools, we create tailored solutions for your business that are aligned with industry best practices and standards.",
    ],
  },
   {
    icon: <Monitor className="text-[#007ba8] w-12 h-12" />,
    title: "Enhancements",
    paragraphs: [
      "Whether you are starting fresh or have been using the platform for a while, we can help you upgrade, optimize, or implement new functionalities for improved efficiency and performance.",
      "Our modernization efforts focus on leveraging emerging platform technologies, such as AI, machine learning, and automation, to enhance the capabilities and value of ServiceNow solutions.",
    ],  
  },
   {
    icon: <Settings className="text-[#007ba8] w-12 h-12" />,
    title: "Maintenance",
    paragraphs: [
      "Post-implementation ongoing support to monitor performance, manage incidents and requests, and perform updates and upgrades is critical to ensure continued success and stability.",
      "We establish service level agreements (SLAs) and support frameworks to define response times, escalation procedures, and resolution targets.",
    ],
  },
];

const Page = () => {
  return (
    <ApproachSection
      heading="Approach"
      description="EnableNow's ServiceNow's service delivery approach is built upon best practices with quality, reliability, and consistency as its core principles. It encompasses a comprehensive framework that ensures successful implementation, modernization, and ongoing operations and maintenance of ServiceNow solutions. By prioritizing these principles, we have effectively met the evolving needs of our clients while driving business value and innovation."
      items={approachData}
    />
  );
};

export default Page;
