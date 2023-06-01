import { Metadata } from 'next';

import Splash from 'app/components/Splash'
import Placeholder from 'app/components/Placeholder';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Fernando and Bianca are getting married, details are coming soon!',
};

const Home = () => (
  <>
    <Splash />
    <Placeholder title="Coming Soon!" />
  </>
);

export default Home;