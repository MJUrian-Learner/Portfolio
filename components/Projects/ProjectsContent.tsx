"use client";

import { CaTEGORIES, PROJECTS } from "@/constants";
import {
  Check,
  Code,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Network,
  Server,
  Workflow,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProjectsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        {/* Project list - Vertical sidebar with scrollable container */}
        <div className="w-full sm:w-1/3 md:w-1/4 space-y-4">
          {/* Category filters */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Filter by Category
              </h3>
              <span className="text-xs text-muted-foreground">
                {
                  PROJECTS.filter(
                    (project) =>
                      activeFilter === "all" ||
                      project.categories.includes(activeFilter)
                  ).length
                }{" "}
                of {PROJECTS.length} projects
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CaTEGORIES.map((category) => (
                <Button
                  variant="outline"
                  size="sm"
                  key={category.id}
                  className={`text-xs rounded-full transition-all ${
                    activeFilter === category.id
                      ? `bg-primary/30 text-foreground`
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                  {category.id !== "all" && (
                    <span className="ml-1 opacity-70">
                      (
                      {
                        PROJECTS.filter((project) =>
                          project.categories.includes(category.id)
                        ).length
                      }
                      )
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Scrollable project list with adjusted height for tablets */}
          <div className="relative">
            <div className="relative rounded-xl border border-primary/10 overflow-hidden">
              <div className="max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh]  overflow-y-auto overflow-x-auto p-2 space-y-3 sm:space-y-4 ">
                {PROJECTS.filter(
                  (project) =>
                    activeFilter === "all" ||
                    project.categories.includes(activeFilter)
                ).map((project, index) => (
                  <motion.button
                    key={index}
                    className={`relative overflow-visible w-full p-4 rounded-xl text-left transition-all ${
                      activeProject === index
                        ? "bg-primary/10 hover:bg-primary/30 border border-primary/10"
                        : `bg-background border border-primary/10 shadow-lg`
                    }`}
                    onClick={() => {
                      setActiveProject(index);
                      setActiveTab("overview");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative z-10">
                      <h3
                        className={`font-medium mb-1 ${
                          activeProject === index
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-foreground/80"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-foreground/80">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {/* {activeProject === index && (
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg`}
                    />
                  )} */}
                  </motion.button>
                ))}
              </div>
              {/* Scroll indicator - only shows when there are more projects than fit in the viewport */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted-foreground to-transparent pointer-events-none ${
                  PROJECTS.filter(
                    (p) =>
                      activeFilter === "all" ||
                      p.categories.includes(activeFilter)
                  ).length > 5
                    ? "opacity-10"
                    : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Project details - Main content area */}
        <div className="w-full sm:w-2/3 md:w-3/4 bg-background backdrop-blur-sm border border-border rounded-xl overflow-hidden">
          <div className="p-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="overview" className="text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Layers size={16} />
                    Overview
                  </div>
                </TabsTrigger>
                <TabsTrigger value="architecture" className="text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Workflow size={16} />
                    Architecture
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                      <Image
                        src={
                          PROJECTS[activeProject].image || "/placeholder.svg"
                        }
                        alt={PROJECTS[activeProject].title}
                        fill
                        className="object-cover"
                      />
                      {/* <div
                        className={`absolute inset-0 bg-gradient-to-tr from-primary to-primary/70 opacity-30 mix-blend-multiply`}
                      /> */}

                      {/* Project tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {PROJECTS[activeProject].tags.map((tag, i) => (
                          <Badge
                            key={i}
                            // className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 border-zinc-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-foreground">
                      {PROJECTS[activeProject].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {PROJECTS[activeProject].description}
                    </p>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:bg-primary/30 dark:hover:bg-zinc-800"
                      >
                        <Code size={14} />
                        View Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`gap-2 bg-gradient-to-r from-primary to-primary/70 text-foreground`}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-2">
                          Role
                        </h3>
                        <p className="text-muted-foreground">
                          {PROJECTS[activeProject].role}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-2">
                          Challenge
                        </h3>
                        <p className="text-muted-foreground">
                          {PROJECTS[activeProject].challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-2">
                          Solution
                        </h3>
                        <p className="text-muted-foreground">
                          {PROJECTS[activeProject].solution}
                        </p>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="mt-8">
                      <h3 className="text-sm font-medium text-foreground mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {PROJECTS[activeProject].features.map(
                          (feature, index) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`w-5 h-5 rounded-full bg-primary flex items-center justify-center`}
                              >
                                <Check size={12} className="text-foreground" />
                              </div>
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="architecture" className="mt-0">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      System Architecture
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {PROJECTS[activeProject].architecture.description}
                    </p>
                  </div>

                  {/* Architecture diagram */}
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h4 className="text-sm font-medium text-foreground mb-4">
                      Architecture Diagram
                    </h4>
                    <div className="bg-foreground rounded-lg p-4 overflow-auto">
                      <pre className="text-xs text-background whitespace-pre-wrap">
                        {PROJECTS[activeProject].architecture.diagram}
                      </pre>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Description
                    </p>
                  </div>

                  {/* Component breakdown */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-4">
                      Component Breakdown
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {PROJECTS[activeProject].architecture.components.map(
                        (component, index) => (
                          <div
                            key={component.name}
                            className="bg-background rounded-lg p-4 border border-border flex items-start gap-3"
                          >
                            {index === 0 && (
                              <Server size={18} className="text-primary" />
                            )}
                            {index === 1 && (
                              <Code size={18} className="text-primary" />
                            )}
                            {index === 2 && (
                              <Database size={18} className="text-primary" />
                            )}
                            {index === 3 && (
                              <Cpu size={18} className="text-primary" />
                            )}
                            {index === 4 && (
                              <Network size={18} className="text-primary" />
                            )}
                            <div>
                              <h5 className="font-medium text-muted-foreground">
                                {component.name}
                              </h5>
                              <p className="text-sm text-foreground">
                                {component.description}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsContent;
