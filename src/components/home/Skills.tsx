import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileType, 
  Atom, 
  Zap, 
  Server, 
  Gamepad2, 
  Video, 
  PuzzleIcon, 
  Brain 
} from 'lucide-react';

export const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      key: 'javascript',
      icon: Code2,
      color: 'text-yellow-500'
    },
    {
      key: 'typescript',
      icon: FileType,
      color: 'text-blue-500'
    },
    {
      key: 'react',
      icon: Atom,
      color: 'text-cyan-500'
    },
    {
      key: 'nextjs',
      icon: Zap,
      color: 'text-gray-800 dark:text-white'
    },
    {
      key: 'express',
      icon: Server,
      color: 'text-green-500'
    },
    {
      key: 'webgl',
      icon: Gamepad2,
      color: 'text-purple-500'
    },
    {
      key: 'webrtc',
      icon: Video,
      color: 'text-red-500'
    },
    {
      key: 'chrome',
      icon: PuzzleIcon,
      color: 'text-blue-600'
    },
    {
      key: 'ai',
      icon: Brain,
      color: 'text-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.key}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-background/50 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">
                    {t(`skills.${skill.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`skills.${skill.key}.desc`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};