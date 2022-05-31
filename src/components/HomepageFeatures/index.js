import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Write simple code',
    description: (
      <>
        Using the variable 't', write simple, arithmetic expressions to define the position of an object in space.
      </>
    ),
  },
  {
    title: 'See 3D geometry',
    description: (
      <>
        Watch your patterns move around a 3-dimensional canvas.
      </>
    ),
  },
  {
    title: 'Hear complex, morphing sounds',
    description: (
      <>
        Map sonic parameters to each axis and trigger sonic events that morph and evolve.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={'/img/zen.png'} className={styles.logo}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
