"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ChallengesSection from "../../_components/ChallengesSection";
import { itamChallenges , itamServices , spmconsiderations , itamBenefits, itamOfferings, itamFaqs , itamPortfolio } from "../../data/servicesData";
import ServicesGrid from "../../_components/ServicesGrid";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import FAQSection from '../../_components/FAQSection';
import Cta from '@/app/_components/Cta';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';

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
          title="ServiceNow ITAM" 
          subtitle="Optimize IT Assets for Efficiency and Cost Savings" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="ITAM provides a centralized platform for tracking, managing, and optimizing assets across your organization, from procurement through disposal."
          paragraph1="ServiceNow IT Asset Management (ITAM) streamlines the lifecycle management of your organization's IT assets, ensuring you maximize value from hardware and software investments while reducing risks and costs. With ServiceNow ITAM, you can maintain compliance, prevent asset sprawl, and make data-driven decisions that improve asset utilization and budget efficiency."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow ITAM" 
          subtitle=""
          considerations={itamChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Benefits to Customers" 
          subtitle=""
          considerations={itamBenefits} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow ITAM Offerings" 
          subtitle="ServiceNow ITAM includes a range of modules designed to track, manage, and optimize assets, delivering value across every stage of the asset lifecycle"
          considerations={itamOfferings} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach: Comprehensive ServiceNow ITAM Implementation"
          subtitle="Our ServiceNow ITAM implementation approach focuses on creating a tailored solution that aligns with your asset management goals and operational requirements. Here’s our process"
          faqs={itamFaqs}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={itamPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page