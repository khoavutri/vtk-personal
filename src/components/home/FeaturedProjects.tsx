import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getFeaturedProjects } from '@/data/projects';

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            {t('featured.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden card-hover group"
              variants={itemVariants}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Demo Preview</p>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {t('common.featured')}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    {project.liveDemo && (
                      <Button size="sm" variant="ghost" className="focus-ring" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.sourceCode && (
                      <Button size="sm" variant="ghost" className="focus-ring" asChild>
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button size="sm" variant="ghost" className="text-primary focus-ring" asChild>
                    <Link to={`/demos/${project.category}/${project.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="hover-lift focus-ring group" asChild>
            <Link to="/demos">
              {t('featured.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};