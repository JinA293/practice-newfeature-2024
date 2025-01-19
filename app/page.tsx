import styles from './page.module.css';
import Section from '../components/Section';

import { lightdark } from '@/data/section/light-dark-display';
import { ThePopoverAPI } from '@/data/section/ThePopoverAPI';
import { textWrap } from '@/data/section/text-wrap';
import { rubyalign } from '@/data/section/ruby-align';
import { Exclusive } from '@/data/section/Exclusive';
import { uservalid } from '@/data/section/user-valid';
import { relativeColor} from '@/data/section/relativeColor';

const sections = [
    // scroll-behavior: smooth;
    { ...lightdark },
    { ...relativeColor },
    { ...uservalid },
    { ...textWrap },
    { ...ThePopoverAPI },
    { ...rubyalign },
    { ...Exclusive },
]

export default function Home() {
  return (
    <div className={styles.container}>
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
        {sections.map((_, index) => (
          <a key={index} href={`#page-${index + 1}`} className={styles.dotStyle}></a>
        ))}
      </nav>
    </div>
  );
}
