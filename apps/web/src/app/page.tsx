import HomePage from './Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gelar Seni',
  description: 'Pagelaran Seni Budaya Indonesia',
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
