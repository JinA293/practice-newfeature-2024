import { FieldSizing } from './section/FieldSizing';
import { AnimateToHeightAuto } from './section/AnimateToHeightAuto';
import { Exclusive } from './section/Exclusive';
import { Stylable } from './section/Stylable';
import { AnchorPositioning } from './section/AnchorPositioning';
import { CustomScrollbars } from './section/CustomScrollbars';
import { CrossDocumentViewTransitions } from './section/Cross-DocumentViewTransitions';
import { ScrollDrivenAnimations } from './section/Scroll-DrivenAnimations';
import { ScrollSnapEvents } from './section/ScrollSnapEvents';
import { BackDropInheritence } from './section/BackDropInheritence';
import { lightdark } from './section/light-dark-text';
import { atproperty } from './section/@property';
import { ThePopoverAPI } from './section/ThePopoverAPI';
import { atstartingstyle } from './section/@starting-style';
import { rubyalign } from './section/ruby-align';
import { paintorder } from './section/paint-order';
import { CSSOMNestedDeclarationsFooter } from './section/CSSOMNestedDeclarationsFooter';
import { textWrap } from './section/text-wrap';
import { hidden } from './section/hidden';


export const sections = [
  { ...FieldSizing },
  { ...AnimateToHeightAuto },
  { ...Exclusive },
  // { ...Stylable },
  { ...AnchorPositioning },
  { ...CustomScrollbars },
  // { ...CrossDocumentViewTransitions },
  // { ...ScrollDrivenAnimations },
  // { ...ScrollSnapEvents },
  // { ...BackDropInheritence },
  { ...lightdark },
  // { ...atproperty },
  { ...ThePopoverAPI },
  // { ...atstartingstyle },
  { ...rubyalign },
  { ...paintorder },
  // { ...CSSOMNestedDeclarationsFooter },
  { ...textWrap },
  { ...hidden },
  ];