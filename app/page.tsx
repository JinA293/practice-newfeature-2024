import styles from './page.module.css';
import Section from '../components/Section';

import { lightdark } from '@/data/section/lightDarkDisplay';
import { ThePopoverAPI } from '@/data/section/thePopoverAPI';
import { textWrap } from '@/data/section/textWrap';
import { rubyalign } from '@/data/section/rubyAlign';
import { Exclusive } from '@/data/section/exclusive';
import { uservalid } from '@/data/section/userValid';
import { relativeColor} from '@/data/section/relativeColor';
import { scrollbehavior } from '@/data/section/scrollBehavior';

const sections = [
    { ...scrollbehavior },
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
