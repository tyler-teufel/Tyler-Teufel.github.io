// routes/index.tsx

import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Education from '../pages/Education';


interface Route {
  path: string;
  component: React.FC;
}

export const routes: Route[] = [
  {
    path: '/Portfolio',
    component: Portfolio
  },
  {
    path: '/about', 
    component: About
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/Resume',
    component: Resume
  },
  {
    path: '/Skills',
    component: Skills
  },
  {
    path: '/Education',
    component: Education
  }

]