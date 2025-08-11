import { Hero } from '@/components/home/Hero';
import { Skills } from '@/components/home/Skills';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default Home;