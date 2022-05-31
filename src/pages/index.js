import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <h1 className={clsx("hero__title", styles.title)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/docs/tutorial/intro">
            Zen Tutorial - 5min
          </Link>
        
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="https://zen.cephasteom.co.uk/">
            Zen Editor
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Zen Docs`}
      description="Tutorial and reference resources for live coding with Zen.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
