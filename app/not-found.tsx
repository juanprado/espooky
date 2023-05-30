import { Metadata } from 'next';

import Placeholder from './components/Placeholder';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Looks like you are a bit lost!',
};

const NotFound = () => <Placeholder title="Not Found!" />

export default NotFound;