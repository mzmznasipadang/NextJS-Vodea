import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className=" color-text font-regular text-xl">
        <p>Victor Chandra</p>
        <p>
          Hello there, My name is Victor and this is the fudamental build with documentation for{' '}
          <a href="https:/vodea.id">Vodea New Web</a>.
        </p>
      </section>
    </Layout>
  );
}