// File 2: Page.tsx Component
"use client"
import React from "react";
import { motion } from "framer-motion";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ServicesGrid from "../../_components/ServicesGrid";
import ServiceNowSPMChallenges from "../../_components/ServiceNowSPMChallenges";
import BenefitsSection from "../../_components/BenefitsSection";
import ConsiderationsSection from "../../_components/ConsiderationsSection";
import BestPractices from "../../_components/BestPractices";
import FAQ from "../../_components/FAQ";
import{ PortfolioManagementExcellence }from "../../_components/PortfolioManagementExcellence";
import Cta from "@/app/_components/Cta";
import { spmServices, spmBenefits, spmChallenges, spmconsiderations, spmFaqs, spmPortfolio, spmPractices} from "../../data/servicesData";
import ChallengesSection from "../../_components/ChallengesSection";

const Page: React.FC = () => {
  // Define container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      },
    },
  };

  // Define item variants for individual section animations
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      className="overflow-hidden"
    >
      <motion.div variants={itemVariants}>
        <ServiceHero 
          title="ServiceNow SPM"
          subtitle="Improve your Portfolio Operations with Integrated Service Management"
          backgroundImage="/images/software1.avif"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="It revolutionizes how enterprises manage services through digital workforce automation, unified platforms, and end-to-end service management."
          paragraph1="ServiceNow changes how businesses manage and deliver their portfolio services."
          paragraph2="ServiceNow Strategic Portfolio Management (SPM) is a robust solution that allows enterprises to streamline processes, enhance service delivery, and deliver an ever-improving user experience. Digital workflow automation on a unified platform simplifies operations and automates intensive processes, solving issues quicker and improving visibility."
          imageSrc="/images/software1.avif"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection
          title="ServiceNow SPM Key capabilities include"
          considerations={spmServices}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection title="Challenges Addressed by ServiceNow SPM" considerations={spmChallenges} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BenefitsSection title="ServiceNow SPM Benefits" benefits={spmBenefits} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Considerations when Implementing ServiceNow SPM" 
          considerations={spmconsiderations} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BestPractices 
          title="Best Practices for SPM Implementation in ServiceNow"
          subtitle="To successfully implement ServiceNow Strategic Portfolio Management (SPM), consider these best practices"
          practices={spmPractices}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FAQ faqs={spmFaqs} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={spmPortfolio}/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  );
};

export default Page;