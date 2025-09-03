"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceSection from "../../_components/ServiceSection";

import ServiceHero from "../../_components/ServiceHero";
import ServicesGrid from '../../_components/ServicesGrid';
import { itsmServices, itsmBenefits, itsmChallenges, itsmConsiderations, itsmFaqs, itsmPractices, itsmCapabilities } from '../../data/servicesData';
import BenefitsSection from '../../_components/BenefitsSection';
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import FAQSection from '../../_components/FAQSection';

import Cta from '@/app/_components/Cta';
import BestPractices from '../../_components/BestPractices';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import { itsmPortfolio } from '../../data/servicesData'; 

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
          title="ServiceNow ITSM" 
          subtitle="Elevate Your IT Operations with Integrated Service Management" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="Revolutionizes how your business handles IT service delivery with digital workflow automation, unified interfaces, and end-to-end service management."
          paragraph1="ServiceNow redefines how businesses manage and deliver IT services."
          paragraph2="ServiceNow IT Service Management (ITSM) is a robust solution that enables organizations to streamline processes, optimize service delivery, and enhance user experience. Its digital workflow automation capabilities centralize operations, automate mundane tasks to resolve issues faster and enhance visibility."
          imageSrc="/itsm.png"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow ITSM Key capabilities include"
          considerations={itsmCapabilities}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow ITSM" 
          subtitle=""
          considerations={itsmChallenges} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BenefitsSection title="ServiceNow ITSM Benefits" benefits={itsmBenefits} />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Considerations when Implementing ServiceNow ITSM" 
          subtitle="If you are ready to embark on a ServiceNow ITSM journey to modernize and digitally transform your IT operations, you must plan carefully and consider the following:"
          considerations={itsmConsiderations} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BestPractices 
          title="Best Practices for ITSM Implementation in ServiceNow"
          subtitle="To successfully implement ServiceNow IT Service Management (ITSM), consider these best practices"
          practices={itsmPractices}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach to ServiceNow ITSM Delivery"
          subtitle="Our approach to ServiceNow ITSM implementation is built on deep industry expertise, attention to detail, and a customer-centric focus using the ServiceNow NowCreate methodology. We work closely with you to ensure the ServiceNow ITSM platform fully aligns with your goals and delivers the expected impact. Here’s how we do it"
          faqs={itsmFaqs}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={itsmPortfolio}/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
      
    </motion.div>
  )
}

export default page