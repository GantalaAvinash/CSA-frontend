import { Footer } from '../components';
import CommonNavbar from '../Eventpage/CommonNavbar';
import Eventspage from '../Eventpage/Events';

const Events = () => (
  <div className="overflow-hidden">
    <CommonNavbar />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Eventspage />
    </div>
    <Footer />
  </div>
);

export default Events;
