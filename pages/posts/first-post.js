import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
    <layout>
        <Head>
          <section className='primary-200'></section>
          <title>Haiyah, What you see?</title>
          <script src="https://connect.facebook.net/en_US/sdk.js"
          />
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
    </layout>
    );
  }