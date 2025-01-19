import styles from './page.module.css';
import Section from '../components/Section';

import { lightdark } from '@/data/section/lightDarkDisplay';
import { thePopoverAPI } from '@/data/section/ThePopoverAPI';
import { textWrap } from '@/data/section/textWrap';
import { rubyalign } from '@/data/section/rubyAlign';
import { exclusive } from '@/data/section/Exclusive';
import { uservalid } from '@/data/section/userValid';
import { relativeColor } from '@/data/section/relativeColor';
import { scrollbehavior } from '@/data/section/scrollBehavior';

import Intro from '@/components/Intro';

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
      <div id={`page-0`} className={styles.section}>
        <Intro />
      </div>
      {sections.map((section, index) => (
        <div id={`page-${index + 1}`} key={index} className={styles.section}>
          <Section
            title={section.title}
            htmlCodeProps={section.htmlCode}
            cssCodeProps={section.cssCode}
          />
        </div>
      ))}
      <nav className={styles.navStyle}>
          <a key={0} href={`#page-0`} className={styles.dotStyle}></a>
        {sections.map((_, index) => (
          <a key={index} href={`#page-${index + 1}`} className={styles.dotStyle}></a>
        ))}
      </nav>
    </div>
  );
}
