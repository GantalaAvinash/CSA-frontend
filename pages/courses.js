import { StyledEngineProvider } from '@mui/material/styles';
import CoursesPage from '../Academicpages/coursespage';
import CommonNavbar from '../Eventpage/CommonNavbar';
import { Footer } from '../components';

const Courses = () => (
  <div className="overflow-hidden ">
    <CommonNavbar />
    <StyledEngineProvider injectFirst>
      <CoursesPage />
    </StyledEngineProvider>
    <Footer />
  </div>
);

export default Courses;
