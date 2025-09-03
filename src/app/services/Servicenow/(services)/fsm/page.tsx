"use client"
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from '@/app/services/Servicenow/_components/ServiceHero'
import ServiceSection from '@/app/services/Servicenow/_components/ServiceSection'
import ConsiderationsSection from '@/app/services/Servicenow/_components/ConsiderationsSection'
import { fsmChallenges, fsmCustomerBenefits, fsmfaqs, fsmOfferings, fsmPortfolio } from '../../data/servicesData'
import FAQSection from '@/app/services/Servicenow/_components/FAQSection'
import{ PortfolioManagementExcellence } from '@/app/services/Servicenow/_components/PortfolioManagementExcellence'
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
          title="ServiceNow Field Service Management" 
          subtitle="Elevate your On-Site Service with Intelligent and Efficient ServiceNow Digital Workflow Automation Engine" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="ServiceNow Field Service Management (FSM) provides intelligent scheduling, real-time visibility, and mobile-friendly tools for technicians in the field to deliver efficient, high-quality on-site service.."
          paragraph1="FSM empowers organizations to enhance team coordination and scheduling automation capabilities to improve customer satisfaction by streamlining workflows for faster and more effective service delivery."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow Field Service Management" 
          subtitle=""
          considerations={fsmChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Benefits of ServiceNow Field Service Management" 
          subtitle=""
          considerations={fsmCustomerBenefits} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow FSM Offerings" 
          subtitle="ServiceNow FSM includes a range of tools designed to optimize on-site service delivery, improve technician productivity, and enhance the customer experience"
          considerations={fsmOfferings} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach: Tailored ServiceNow FSM Implementation" 
          subtitle="Our approach to delivering ServiceNow FSM focuses on aligning the platform’s capabilities with your organization’s specific field service goals, ensuring streamlined operations, improved efficiency, and a superior customer experience. Here’s our delivery process"
          faqs={fsmfaqs} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={fsmPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page