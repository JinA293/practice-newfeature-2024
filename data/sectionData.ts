import { FieldSizing } from './section/FieldSizing';
import { AnimateToHeightAuto } from './section/AnimateToHeightAuto';
import { Exclusive } from './section/Exclusive';
import { Stylable } from './section/Stylable';
import { AnchorPositioning } from './section/AnchorPositioning';
import { CustomScrollbars } from './section/CustomScrollbars';
import { CrossDocumentViewTransitions } from './section/crossDocumentViewTransitions';
import { ScrollDrivenAnimations } from './section/scrollDrivenAnimations';
import { ScrollSnapEvents } from './section/ScrollSnapEvents';
import { BackDropInheritence } from './section/BackDropInheritence';
import { lightdark } from './section/lightDarkText';
import { atproperty } from './section/atProperty';
import { ThePopoverAPI } from './section/ThePopoverAPI';
import { atstartingstyle } from './section/atStartingStyle';
import { rubyalign } from './section/rubyAlign';
import { paintorder } from './section/paintOrder';
import { CSSOMNestedDeclarationsFooter } from './section/CSSOMNestedDeclarationsFooter';
import { textWrap } from './section/textWrap';
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