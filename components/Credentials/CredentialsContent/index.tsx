import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "motion/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";
import ExperienceItem from "./ExperienceItem";

const CredentialsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const [activeTab, setActiveTab] = useState("education");
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="education" className="text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} />
              Education
            </div>
          </TabsTrigger>
          <TabsTrigger value="certifications" className="text-sm">
            <div className="flex items-center gap-2">
              <Award size={16} />
              Certifications
            </div>
          </TabsTrigger>
          <TabsTrigger value="experience" className="text-sm">
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              Experience
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Education Tab */}
        <TabsContent
          value="education"
          className="mt-0 dark:data-[state=active]:text-red-500"
        >
          <div className="space-y-8">
            <EducationItem
              degree="Master of Science in Computer Science"
              institution="Stanford University"
              years="2018 - 2020"
              description="Specialized in Human-Computer Interaction and Artificial Intelligence. Thesis focused on developing intuitive interfaces for complex data visualization."
              achievements={[
                "Graduated with Distinction",
                "Published research paper on UI/UX optimization",
                "Teaching Assistant for Web Development course",
              ]}
              index={0}
            />

            <EducationItem
              degree="Bachelor of Science in Software Engineering"
              institution="Massachusetts Institute of Technology"
              years="2014 - 2018"
              description="Comprehensive program covering software development methodologies, algorithms, and system design. Minor in Digital Arts and Design."
              achievements={[
                "Dean's List all semesters",
                "Led team project that won Innovation Award",
                "Internship at Google during junior year",
              ]}
              index={1}
            />

            <EducationItem
              degree="Design Thinking Workshop"
              institution="IDEO"
              years="Summer 2017"
              description="Intensive workshop on applying design thinking principles to product development and problem-solving."
              achievements={[
                "Developed prototype for accessibility-focused mobile app",
                "Received mentorship from industry leaders",
              ]}
              index={2}
            />
          </div>
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certifications" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificationItem
              title="AWS Certified Solutions Architect"
              issuer="Amazon Web Services"
              date="2022"
              image="/placeholder.svg?height=100&width=100"
              index={0}
            />

            <CertificationItem
              title="Google Cloud Professional Developer"
              issuer="Google"
              date="2021"
              image="/placeholder.svg?height=100&width=100"
              index={1}
            />

            <CertificationItem
              title="React Advanced Concepts"
              issuer="Frontend Masters"
              date="2021"
              image="/placeholder.svg?height=100&width=100"
              index={2}
            />

            <CertificationItem
              title="UX Design Professional"
              issuer="Interaction Design Foundation"
              date="2020"
              image="/placeholder.svg?height=100&width=100"
              index={3}
            />

            <CertificationItem
              title="Advanced JavaScript Patterns"
              issuer="Udemy"
              date="2019"
              image="/placeholder.svg?height=100&width=100"
              index={4}
            />

            <CertificationItem
              title="Certified Scrum Master"
              issuer="Scrum Alliance"
              date="2019"
              image="/placeholder.svg?height=100&width=100"
              index={5}
            />
          </div>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="mt-0">
          <div className="space-y-12">
            <ExperienceItem
              position="Senior Frontend Developer"
              company="TechVision Inc."
              years="2021 - Present"
              description="Lead developer for the company's flagship product, a data visualization platform used by Fortune 500 companies. Responsible for architecture decisions, performance optimization, and mentoring junior developers."
              achievements={[
                "Redesigned UI resulting in 40% improvement in user engagement",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Led migration from Angular to React, improving performance by 35%",
                "Mentored 5 junior developers who were promoted to mid-level roles",
              ]}
              index={0}
            />

            <ExperienceItem
              position="UI/UX Developer"
              company="InnovateLab"
              years="2018 - 2021"
              description="Worked on multiple client projects developing responsive web applications and mobile interfaces. Collaborated closely with design and backend teams to deliver cohesive products."
              achievements={[
                "Developed component library used across 12+ client projects",
                "Reduced load time by 45% through code optimization",
                "Implemented accessibility standards resulting in WCAG AA compliance",
                "Created interactive prototypes that improved client approval rate by 30%",
              ]}
              index={1}
            />

            <ExperienceItem
              position="Web Developer Intern"
              company="Google"
              years="Summer 2017"
              description="Worked with the Chrome DevTools team to improve developer experience and implement new features."
              achievements={[
                "Contributed to open-source projects",
                "Developed a new debugging feature that was shipped to production",
                "Collaborated with UX researchers to improve tool usability",
              ]}
              index={2}
            />
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default CredentialsContent;
