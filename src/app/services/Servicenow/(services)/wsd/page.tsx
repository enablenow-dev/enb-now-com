"use client"
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from '../../_components/ServiceHero'
import ServiceSection from '../../_components/ServiceSection'
import ConsiderationsSection from '../../_components/ConsiderationsSection'
import { wsdChallenges, wsdCustomerBenefits, wsdfaqs, wsdOfferings, wsdPortfolio } from '../../data/servicesData'
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
          title="ServiceNow WSD" 
          subtitle="ServiceNow Workplace Service Delivery: Transforming Workplace Operations with Integrated Service Management" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="WSD centralizes workplace services, automates routine processes, and enhances visibility into workplace assets, empowering organizations to create a productive, engaging work environment for employees."
          paragraph1="ServiceNow Workplace Service Delivery (WSD) is designed to streamline and automate workplace operations, providing employees with an efficient, seamless experience across workplace requests, resource booking, and facilities management.."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow WSD" 
          subtitle=""
          considerations={wsdChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Benefits to Customers" 
          subtitle=""
          considerations={wsdCustomerBenefits} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow WSD Offerings" 
          subtitle="ServiceNow WSD includes a comprehensive set of tools designed to enhance workplace efficiency, simplify resource management, and create a cohesive employee experience"
          considerations={wsdOfferings} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection
          title="Our Approach: Comprehensive ServiceNow WSD Implementation"
          subtitle="Our approach to delivering ServiceNow WSD is designed to align the platform’s capabilities with your organization’s unique workplace management needs, ensuring streamlined operations and an enhanced employee experience. Here’s an overview of our delivery process"
          faqs={wsdfaqs}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={wsdPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page