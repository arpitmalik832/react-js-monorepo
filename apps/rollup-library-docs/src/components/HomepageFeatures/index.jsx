/**
 * @file Homepage features component that displays the main features of Docusaurus.
 */
import React from 'react';
import clsx from 'clsx';

import EasyToUseSvgComponent from '../../../static/img/undraw_docusaurus_mountain.svg';
import FocusOnWhatMattersSvgComponent from '../../../static/img/undraw_docusaurus_tree.svg';
import PoweredByReactSvgComponent from '../../../static/img/undraw_docusaurus_react.svg';

import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: EasyToUseSvgComponent,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: FocusOnWhatMattersSvgComponent,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: PoweredByReactSvgComponent,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

/**
 * Renders a feature card component with an icon, title, and description.
 * @param {object} root0 - The component props.
 * @param {React.ComponentType<SVGProps<SVGSVGElement>>} root0.Svg - The SVG component to display.
 * @param {string} root0.title - The title of the feature.
 * @param {React.ReactNode} root0.description - The description of the feature.
 * @returns {JSX.Element} A feature card component.
 * @example
 * <Feature
 *   Svg={MyIconComponent}
 *   title="Feature Title"
 *   description="Feature description goes here"
 * />
 */
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

/**
 * Renders the homepage features section containing multiple feature cards.
 * @returns {JSX.Element} The homepage features section.
 * @example
 * <HomepageFeatures />
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(props => (
            <Feature
              key={`feature-${props.title}`}
              Svg={props.Svg}
              title={props.title}
              description={props.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
