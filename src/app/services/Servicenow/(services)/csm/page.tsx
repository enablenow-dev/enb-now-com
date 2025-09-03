"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from '../../_components/ServiceHero'
import ServiceSection from '../../_components/ServiceSection'
import ConsiderationsSection from '../../_components/ConsiderationsSection'
import { csmBenefits, csmBestPractices, csmCapabilities, csmChallenges, csmConsiderations, csmfaqs, csmPortfolio } from '../../data/servicesData'
import BenefitsSection from '../../_components/BenefitsSection'
import BestPractices from '../../_components/BestPractices'
import FAQSection from '../../_components/FAQSection'
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence'
import Cta from '@/app/_components/Cta'

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
          title="ServiceNow Customer Service Management (CSM)" 
          subtitle="Transform Your Customer Service Through Integrated Digital Interaction" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="Transform your company's customer service delivery with end-to-end case management, uniform workflows, and proactive involvement."
          paragraph1="ServiceNow transforms how companies oversee customer support operations by offering a centralized, scalable platform."
          paragraph2="ServiceNow Customer Service Management (CSM) workflow automation streamlines processes, shortens turnaround times, and provides comprehensive insight into client problems, enabling businesses to increase customer loyalty, expedite case resolution, and improve customer satisfaction."
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow CSM Key capabilities include" 
          subtitle=""
          considerations={csmCapabilities} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow CSM" 
          subtitle=""
          considerations={csmChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BenefitsSection title="ServiceNow CSM Benefits" benefits={csmBenefits} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Considerations When Implementing ServiceNow CSM" 
          subtitle="If you are ready to elevate your customer service experience with ServiceNow CSM, careful planning and consideration are essential"
          considerations={csmConsiderations} 
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <BestPractices 
          title="Best Practices for Implementing ServiceNow CSM"
          subtitle="To successfully implement ServiceNow CSM, consider these best practices"
          practices={csmBestPractices}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach to ServiceNow CSM Delivery"
          subtitle="Our ServiceNow CSM delivery approach combines industry expertise, attention to detail, and a customer-centric focus. Using the ServiceNow Now Create methodology, we collaborate closely with you to ensure the solution aligns with your business goals."
          faqs={csmfaqs}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={csmPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page