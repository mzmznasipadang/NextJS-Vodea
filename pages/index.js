import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className=" text-primary-200 font-regular text-2xl text-center">
        <p>We might have some problem...</p>
        <p>
          No need to cry, you just found our Missing Pages. 
          {' '} <section className='text-danger'>
          <a href="https:/vodea.id">Click here to visit home!</a>
          </section>
        </p>
      </section>
    </Layout>
  );
}