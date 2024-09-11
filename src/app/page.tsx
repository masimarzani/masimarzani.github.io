"use client";
import { motion } from "framer-motion";
import ButtonActions from "@/components/ButtonActions";
import ExperienceField from "@/components/ExperienceField";
import Faqs from "@/components/Faqs";
import MainLayout from "@/components/Layout/Main";
import MovingIcons from "@/components/MovingIcons";
import Profile from "@/components/Profile";
import ProjectCards from "@/components/ProjectCards";
import SkillsField from "@/components/SkillsField";
import Typography from "@/components/Typography";
import { projectData } from "@/data/projectData";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MainLayout>
      <motion.div
        className="w-full min-h-[70vh] flex flex-col gap-5 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Profile />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ButtonActions />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MovingIcons />
        </motion.div>
      </motion.div>
      {projectData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCards
            Title={project.Title}
            SubTitle={project.SubTitle}
            Image={project.Image}
            OptionOne={project.OptionOne}
            OptionTwo={project.OptionTwo}
            ButtonText={project.ButtonText}
            ButtonLink={project.ButtonLink}
            BgColor={project.BgColor}
          />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SkillsField />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ExperienceField />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Faqs />
      </motion.div>
    </MainLayout>
  );
}
