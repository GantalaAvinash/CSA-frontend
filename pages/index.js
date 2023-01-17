import { Footer, Navbar } from '../components';
import { About, Placements, MottoOfCSA, Header, Events, Academics, GoalOfCSA } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Header />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <MottoOfCSA />
    </div>
    <div className="relative">
      <Placements />
      <div className="gradient-04 z-0" />
      <Events />
    </div>
    <div className="relative">
      <Academics />
      <div className="gradient-04 z-0" />
    </div>
    <GoalOfCSA />
    <Footer />
  </div>
);

export default Home;
