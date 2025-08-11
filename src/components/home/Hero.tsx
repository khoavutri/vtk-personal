import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  console.log('Hero component rendering...');
  console.log('Link component:', Link);
  const { t } = useTranslation();

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={itemVariants}
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="hover-lift focus-ring glow group min-w-[200px]"
              asChild
            >
              <Link to="/demos">
                {t('hero.cta.portfolio')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift focus-ring min-w-[200px]"
              asChild
            >
              <Link to="/contact">
                {t('hero.cta.contact')}
                <Download className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};