import { Metadata } from 'next';

import AttireGallery from 'app/components/AttireGallery';
import Details from 'app/components/Details';
import Gifts from 'app/components/Gifts';
import Header from 'app/components/Header';
import Placeholder from 'app/components/Placeholder';
import Splash from 'app/components/Splash'
import ThingsToDo from 'app/components/ThingsToDo';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Fernando and Bianca are getting married!',
};

const Home = () => (
  <>
    <Header />
    {/* The ids must match the ids in sections.ts */}
    <Splash id="splash" />
    <Details id="details" />
    <AttireGallery id="attire-gallery" />
    <ThingsToDo id="things-to-do" />
    <Gifts id="gifts" />
    <Placeholder id="footer" title="See You There!" />
  </>
);

export default Home;