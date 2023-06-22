import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fernando and Bianca are getting married!',
  description: 'Fernando and Bianca are getting married, details are coming soon!',
};

const RSVP = () => (
  <>
    <main>
      <iframe src="https://biancaandfernando.rsvpify.com?embed=1" />
    </main>
  </>
);

export default RSVP;