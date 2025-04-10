import Head from 'next/head';
import Link from 'next/link';
import FavoritesList from '../../components/FavoritesList';

export default function Favorites() {
  return (
    <div className="p-8">
      <Head>
        <title>My favorites list</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-center">My favorites list</h1>
      <div className="flex flex-col items-center gap-4 mb-4">
        <FavoritesList />
      </div>
      <div className="text-center">
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
