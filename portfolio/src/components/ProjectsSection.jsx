import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Onlinegatimaan",
    description: "Build a Consultancy website ",
    image: "/projects/project1.png",
    tags: ["MongoDb", "ExpressJs", "ReactJs", "NodeJS"],
    demoUrl: "https://onlinegatimaan.in/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Resume-Builder",
    description:
      "Build Professional Resumes Instantly Our resume builder helps you create a standout resume in minutes — no design skills required.",
    image: "/projects/project2.png",
    tags: ["ReactJS", "MongoDB", "NodeJS", "ExpressJS", "Tailwindcss"],
    demoUrl: "https://resumebuilder-yona.onrender.com/",
    githubUrl: "https://github.com/Fazal0567/Resume-Builder",
  },
  {
    id: 3,
    title: "Code Reviewr",
    description:
      "Lintro - AI Code Review Tool Lintro is a web application that provides AI-powered code reviews. It allows developers to paste their code and receive instant feedback, suggestions, and improvements from an AI code reviewer..",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Google Gemini"],
    demoUrl: "https://lintro-pixw.onrender.com/",
    githubUrl: "https://github.com/Fazal0567/Lintro-",
  },
  {
    id: 4,
    title: "QuickBlog",
    description:
      "Your own blogging platform.This is your space to think out loud, to share what matters, and to write without filters.Whether it's one word or a thousand, your story starts right here.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "MongoDb" , "ExpressJs"],
    demoUrl: "https://blog-1-9nw6.onrender.com/",
    githubUrl: "https://github.com/Fazal0567/Blog",
  },
  {
    id: 5,
    title: "Image-Compressor",
    description:
      "A simple web application to compress images directly in the browser. This app allows users to upload an image, adjust the compression quality, and download the compressed version..",
    image: "/projects/project5.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "https://fazal0567.github.io/photo-compressor-web/",
    githubUrl: "https://github.com/Fazal0567/photo-compressor-web",
  },
  {
    id: 6,
    title: "FastFingers",
    description:"Test your typing speed ",
    image: "/projects/project6.png",
    tags: ["Reacjs", "tailwindcss"],
    demoUrl: "https://fastfingers-gpif.onrender.com/",
    githubUrl: "https://github.com/Fazal0567/FastFingers"
  }
  /*
  {
    id: 7,
    title: "Interview-Prep",
    description:"Get interview questions and model answers based on your role, experience, and specific focus areas — no filler, just what matters. ",
    image: "/projects/project7.png",
    tags: ["MongoDb", "ExpressJs","ReactJs","NodeJs"],
    demoUrl: "https://interviewprep-69yw.onrender.com/",
    // githubUrl: "https://github.com/Fazal0567/FastFingers"
  }
  */

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Fazal0567"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
