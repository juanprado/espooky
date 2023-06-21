import { Metadata } from 'next';

import Header from 'app/components/Header';
import Splash from 'app/components/Splash'
import Splash2 from 'app/components/Splash2';
import Details from 'app/components/Details';
import ThingsToDo from 'app/components/ThingsToDo';
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
    {/* <Splash id="splash" /> */}
    <Splash2 id="splash" />
    <Details id="details" />
    <AttireGallery id="attire-gallery" />
    <ThingsToDo id="things-to-do" />
    <Placeholder id="footer" title="See You There!" />
  </>
);

export default Home;