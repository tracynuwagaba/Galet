import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Galet</h1>
        <ul>
          <li>Living room</li>
          <li>Bedroom</li>
          <li>Kitchen and dining</li>
          <li>Outdoor</li>
          <li>Accessories</li>
          <li>Sales</li>
        </ul>
      </div>
    </Layout>
  );
}
