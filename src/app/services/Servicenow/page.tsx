"use client";
import React from "react";
import HeroBanner from "@/app/services/_components/HeroBanner";
import Value from "./_components/Value";
import OurExpertise from "./_components/OurExpertise";
import Approach from "./_components/Approach";
import Cta from "@/app/_components/Cta";
import { motion } from "framer-motion";

function page() {
  // Define container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Define item variants for individual section animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <HeroBanner
        title="ServiceNow: Digital Transformation is not a journey. It is a Mission."
        subTitle="Unlock your full potential and achieve operational excellence in the digital age with our relentless focus on innovation and customer success."
        heroImage="/infinity.jpg"
      />
      <Value />
      <OurExpertise />
      <Approach />
      <Cta />
    </motion.div>
  );
}

export default page;
