import styles from './page.module.css';
import Section from '../components/Section';

import { lightdark } from '@/data/section/lightDarkDisplay';
import { thePopoverAPI } from '@/data/section/thePopoverAPI';
import { textWrap } from '@/data/section/textWrap';
import { rubyalign } from '@/data/section/rubyAlign';
import { exclusive } from '@/data/section/exclusive';
import { uservalid } from '@/data/section/userValid';
import { relativeColor } from '@/data/section/relativeColor';
import { scrollbehavior } from '@/data/section/scrollBehavior';

import Intro from '@/components/Intro';
import Title from '@/components/Title';


const sections = [
  { ...scrollbehavior },
  { ...lightdark },
  { ...relativeColor },
  { ...uservalid },
  { ...textWrap },
  { ...thePopoverAPI },
  { ...rubyalign },
  { ...exclusive },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <div id={`page--2`} className={styles.section}>
        <Intro />
      </div>
      <div id={`page--1`} className={styles.section}>
        <Title />
      </div>
      {sections.map((section, index) => (
        <div id={`page-${index}`} key={index} className={styles.section}>
          <Section
            title={section.title}
            htmlCodeProps={section.htmlCode}
            cssCodeProps={section.cssCode}
          />
        </div>
      ))}
      <nav className={styles.navStyle}>
          <a href={`#page--2`} className={styles.dotStyle}></a>
          <a href={`#page--1`} className={styles.dotStyle}></a>
        {sections.map((_, index) => (
          <a key={index} href={`#page-${index}`} className={styles.dotStyle}></a>
        ))}
      </nav>
    </div>
  );
}
