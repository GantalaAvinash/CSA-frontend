import MaterialPage from '../Academicpages/materialpage';
import styles from '../styles';
import CommonNavbar from '../Eventpage/CommonNavbar';
import { Footer } from '../components';

const Material = () => (
  <div className="overflow-hidden">
    <CommonNavbar />
    <div className={`${styles.innerWidth} bg-primary-black overflow-hidden content-center flex gap-2 justify-around ...`}>
      <MaterialPage />
    </div>
    <Footer />
  </div>
);

export default Material;
