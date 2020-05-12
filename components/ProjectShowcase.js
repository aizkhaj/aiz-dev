import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
  return (
    <div className="mb-7">
      <h1 className="font-sans text-4xl font-bold">Projects</h1>
      <ProjectCard
        href="https://halalscope.co"
        name="Halalscope"
        description="Find halal investing opportunities using Halalscope."
      />
    </div>
  );
};

export default ProjectShowcase;
