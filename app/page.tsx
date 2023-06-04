import { Metadata } from 'next';

import Splash from 'app/components/Splash'
import Details from 'app/components/Details';
import AttireGallery from 'app/components/AttireGallery';
import Placeholder from 'app/components/Placeholder';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Fernando and Bianca are getting married, details are coming soon!',
};

const Home = () => (
  <>
    <Splash />
    <Details />
    <AttireGallery />
    <Placeholder title="Coming Soon!" />
  </>
);

export default Home;