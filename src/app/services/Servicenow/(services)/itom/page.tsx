"use client";
import React from 'react'
import { motion } from "framer-motion";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from "../../_components/ConsiderationsSection";
import { itomBenefits, itomCapabilities, itomChallenges, itomConsiderations, itomfaqs, itomOfferings, itomPortfolio, itomPractices } from '../../data/servicesData';
import BenefitsSection from '../../_components/BenefitsSection';
import BestPractices from '../../_components/BestPractices';
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
          title="ServiceNow ITOM" 
          subtitle="Elevate IT Operations with Seamless Automation and Intelligent Visibility" 
          backgroundImage="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiceSection
          heading="ServiceNow IT Operations Management (ITOM) is a powerful suite that transforms how organizations manage, monitor, and optimize their IT infrastructure.."
          paragraph1="By automating operations and providing unified visibility, ServiceNow ITOM helps businesses reduce downtime, ensure service reliability, and enhance the agility of IT operations."
          paragraph2="ServiceNow ITOM redefines how businesses manage their IT environments, enabling proactive monitoring, faster issue resolution, and smarter resource allocation. ITOM integrates with the entire ServiceNow ecosystem, aligning operations with business needs to ensure greater efficiency and continuous improvement."
          imageSrc="/images/software1.avif"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="ServiceNow ITOM Key Capabilities" 
          subtitle=""
          considerations={itomCapabilities} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Challenges Addressed by ServiceNow ITOM" 
          subtitle=""
          considerations={itomChallenges} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BenefitsSection title="ServiceNow ITOM Benefits" benefits={itomBenefits} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsiderationsSection 
          title="Considerations when Implementing ServiceNow ITOM" 
          subtitle="If you’re ready to implement ServiceNow ITOM to optimize your IT operations, keep the following considerations in mind"
          considerations={itomConsiderations} 
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BestPractices 
          title="Best Practices for ITOM Implementation in ServiceNow"
          subtitle="To successfully implement ServiceNow IT Operations Management (ITOM), consider these best practices"
          practices={itomPractices}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FAQSection 
          title="Our Approach to ServiceNow ITOM Delivery"
          subtitle="Our approach to ServiceNow ITOM implementation focuses on delivering value from day one. We use the ServiceNow NowCreate methodology to tailor solutions to your organization’s needs and ensure a smooth deployment"
          faqs={itomfaqs}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PortfolioManagementExcellence content={itomPortfolio}/>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Cta/>
      </motion.div>
    </motion.div>
  )
}

export default page