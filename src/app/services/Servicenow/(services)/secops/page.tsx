"use client"
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import { secOpsChallenges, secopsCustomerBenefits, secopsfaqs, secopsOfferings, secopsPortfolio } from '../../data/servicesData';
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
          title="ServiceNow SecOps" 
          subtitle="ServiceNow Security Operations: Proactive Threat Detection and Response" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="ServiceNow Security Operations (SecOps) transforms security and incident response by providing an integrated platform for identifying, managing, and mitigating threats across your organization."
          paragraph1="With automation, real-time visibility, and intelligent prioritization, ServiceNow SecOps empowers security teams to respond to incidents faster, streamline workflows, and enhance organizational resilience against cyber threats."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow Security Operations" 
          subtitle=""
          considerations={secOpsChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Benefits to Customers" 
          subtitle=""
          considerations={secopsCustomerBenefits} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow SecOPs Offerings" 
          subtitle="ServiceNow SecOps includes a suite of powerful tools designed to manage and automate security incident response, threat intelligence, and vulnerability management"
          considerations={secopsOfferings} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach: Comprehensive ServiceNow Security Operations Implementation" 
          subtitle="Our approach to implementing ServiceNow SecOps focuses on aligning security workflows with your organization's risk managementand compliance goals. Here's a step-by-step breakdown of our delivery process"
          faqs={secopsfaqs} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={secopsPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page