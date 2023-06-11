import { Metadata } from 'next';

import Header from 'app/components/Header';
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
    <Header />
    {/* The ids must match the ids in sections.ts */}
    <Splash id="splash" />
    <Details id="details" />
    <AttireGallery id="attire-gallery" />
    <Placeholder id="footer" title="See You There!" />
  </>
);

export default Home;