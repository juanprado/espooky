import { Metadata } from 'next';

import Placeholder from './components/Placeholder';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Fernando and Bianca are getting married, details are coming soon!',
};

const Home = () => (
  <Placeholder title="Coming Soon!" />
)

export default Home;