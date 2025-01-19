import { fieldSizing } from './section/fieldSizing';
import { animateToHeightAuto } from './section/animateToHeightAuto';
import { exclusive } from './section/exclusive';
import { Stylable } from './section/stylable';
import { AnchorPositioning } from './section/anchorPositioning';
import { CustomScrollbars } from './section/customScrollbars';
import { CrossDocumentViewTransitions } from './section/crossDocumentViewTransitions';
import { ScrollDrivenAnimations } from './section/scrollDrivenAnimations';
import { ScrollSnapEvents } from './section/scrollSnapEvents';
import { BackDropInheritence } from './section/backDropInheritence';
import { lightdark } from './section/lightDarkText';
import { atproperty } from './section/atProperty';
import { thePopoverAPI } from './section/thePopoverAPI';
import { atstartingstyle } from './section/atStartingStyle';
import { rubyalign } from './section/rubyAlign';
import { paintorder } from './section/paintOrder';
import { CSSOMNestedDeclarationsFooter } from './section/CSSOMNestedDeclarationsFooter';
import { textWrap } from './section/textWrap';
import { hidden } from './section/hidden';


export const sections = [
  { ...fieldSizing },
  { ...animateToHeightAuto },
  { ...exclusive },
  // { ...Stylable },
  { ...AnchorPositioning },
  { ...CustomScrollbars },
  // { ...CrossDocumentViewTransitions },
  // { ...ScrollDrivenAnimations },
  // { ...ScrollSnapEvents },
  // { ...BackDropInheritence },
  { ...lightdark },
  // { ...atproperty },
  { ...thePopoverAPI },
  // { ...atstartingstyle },
  { ...rubyalign },
  { ...paintorder },
  // { ...CSSOMNestedDeclarationsFooter },
  { ...textWrap },
  { ...hidden },
  ];