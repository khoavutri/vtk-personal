import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: "2024",
      title: "Senior Web Developer",
      company: "Tech Startup",
      description:
        "Leading frontend development with focus on WebRTC and WebGL applications",
    },
    {
      year: "2023",
      title: "Web Developer",
      company: "Digital Agency",
      description:
        "Specialized in React applications and Chrome extension development",
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "Software Company",
      description:
        "Started journey with JavaScript and modern web technologies",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      techs: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "Socket.io", "PostgreSQL"],
    },
    {
      category: "Specialized",
      techs: ["WebGL", "Three.js", "WebRTC", "mediasoup", "Chrome APIs"],
    },
    {
      category: "AI/ML",
      techs: ["OpenAI API", "LangChain", "RAG", "Vector Databases"],
    },
    { category: "Tools", techs: ["Git", "Docker", "Vercel", "GitHub Actions"] },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text">
            {t("nav.about")}
          </h1>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
            <div className="text-3xl font-bold text-primary">VTK</div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="glass rounded-2xl p-8 space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold">Hello! I'm {t("hero.name")}</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none">
            <p>
              A passionate Web Developer with expertise in creating cutting-edge
              web applications. I specialize in real-time communication
              technologies (WebRTC), 3D graphics (WebGL), and AI-powered
              applications.
            </p>
            <p>
              My journey in web development spans across various domains - from
              building scalable video conferencing solutions using mediasoup SFU
              to creating immersive 3D experiences with WebGL and Three.js. I
              also develop Chrome extensions and integrate AI capabilities into
              web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@vutrkhoa.dev</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center">
            Experience Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="glass rounded-xl p-6 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute left-0 top-6 w-1 h-12 bg-primary rounded-full" />
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{item.year}</Badge>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-primary font-medium">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                className="glass rounded-xl p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-2xl font-bold">Let's work together</h2>
          <p className="text-muted-foreground">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift focus-ring" asChild>
              <Link to="/contact">{t("hero.cta.contact")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift focus-ring"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
