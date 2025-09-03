"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import { irmChallenges, irmCustomerBenefits, irmFaqs, irmOfferings, irmPortfolio } from '../../data/servicesData';
import FAQSection from '../../_components/FAQSection';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import Cta from '@/app/_components/Cta';

function page() {
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
          title="ServiceNow IRM" 
          subtitle="ServiceNow Integrated Risk Management: Proactive and Intelligent Risk Management" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="By automating workflows and consolidating risk data, IRM empowers businesses to make informed, data-driven decisions to protect and enhance their organization's operational and strategic objectives."
          paragraph1="ServiceNow Integrated Risk Management (IRM) offers a centralized platform to streamline risk, compliance, and audit management, enabling organizations to proactively manage risks, maintain compliance, and strengthen their resilience."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow IRM" 
          subtitle=""
          considerations={irmChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Benefits to Customers" 
          subtitle=""
          considerations={irmCustomerBenefits} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow IRM Offerings" 
          subtitle="ServiceNow IRM includes a suite of modules designed to help organizations manage risk, compliance, and audit processes more effectively"
          considerations={irmOfferings} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach: Tailored ServiceNow IRM Implementation"
          subtitle="Our approach to implementing ServiceNow IRM focuses on aligning your organization’s risk and compliance needs with the platform’s capabilities, creating a robust framework that adapts to evolving risks and regulatory demands. Here’s how we deliver a tailored IRM solution"
          faqs={irmFaqs}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={irmPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page