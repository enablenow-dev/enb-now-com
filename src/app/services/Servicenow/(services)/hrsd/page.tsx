"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from '@/app/services/Servicenow/_components/ServiceHero'
import ServiceSection from '@/app/services/Servicenow/_components/ServiceSection'
import ConsiderationsSection from '@/app/services/Servicenow/_components/ConsiderationsSection'
import { hrsdBenefits, hrsdBestPractices, hrsdCapabilities, hrsdChallenges, hrsdConsiderations, hrsdfaqs, hrsdPortfolio } from '../../data/servicesData'
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
      <ServiceHero 
        title="ServiceNow HRSD" 
        subtitle="Elevate Your HR Operations with ServiceNow HRSD:  The Ultimate Integrated HR Service Management Solution" 
        backgroundImage="/images/software1.avif"
      />
      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="Revolutionizes how your business handles HR service delivery with digital workflow automation, unified interfaces, and end-to-end service management."
          paragraph1="Improve productivity by providing employees with a centralized platform to access the help and guidance they need, all in one place. Reduce costs with AI-driven self-service capabilities and streamlined case resolution, ensuring faster and more efficient support. From hire to retire, perfect manual and inefficient processes through employee self-service, digitization, and intelligent automation. Leverage the power of the Now Platform as a single system of action to automate essential processes, enhance efficiency, and deliver a seamless employee experience across the enterprise."
          paragraph2=""
          imageSrc="/images/software1.avif"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow HRSD Key Capabilities Include" 
          subtitle=""
          considerations={hrsdCapabilities} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow HRSD" 
          subtitle=""
          considerations={hrsdChallenges} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BenefitsSection
          title="ServiceNow HRSD Benefits"
          benefits={hrsdBenefits}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Considerations When Implementing ServiceNow HRSD" 
          subtitle="If you are ready to embark on a ServiceNow HRSD journey to modernize and digitally transform your HR operations effectively, you must plan carefully and consider the following:"
          considerations={hrsdConsiderations} 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BestPractices
          title="Best Practices for Implementing ServiceNow HRSD"
          subtitle="To successfully implement ServiceNow HRSD, consider these best practices"
          practices={hrsdBestPractices}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach to ServiceNow HR Service Delivery"
          subtitle="Our approach to ServiceNow HRSD implementation combines deep ability in HR transformation, a focus on employee experience, and alignment with your organizational culture, all guided by ServiceNow’s NowCreate method. We collaborate closely with your HR and leadership teams to ensure the platform enhances service delivery, empowers employees, and drives measurable outcomes. Here’s how we deliver success:"
          faqs={hrsdfaqs}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={hrsdPortfolio}/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page