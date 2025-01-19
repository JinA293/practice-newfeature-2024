import { fieldSizing } from './section/fieldSizing';
import { animateToHeightAuto } from './section/animateToHeightAuto';
import { exclusive } from './section/exclusive';
import { stylable } from './section/stylable';
import { anchorPositioning } from './section/anchorPositioning';
import { customScrollbars } from './section/customScrollbars';
import { crossDocumentViewTransitions } from './section/crossDocumentViewTransitions';
import { scrollDrivenAnimations } from './section/scrollDrivenAnimations';
import { scrollSnapEvents } from './section/scrollSnapEvents';
import { backDropInheritence } from './section/backDropInheritence';
import { lightDarkText } from './section/lightDarkText';
import { atProperty } from './section/atProperty';
import { thePopoverAPI } from './section/thePopoverAPI';
import { atStartingStyle } from './section/atStartingStyle';
import { rubyAlign } from './section/rubyAlign';
import { paintOrder } from './section/paintOrder';
import { textWrap } from './section/textWrap';
import { hidden } from './section/hidden';


export const sections = [
  { ...fieldSizing },
  { ...animateToHeightAuto },
  { ...exclusive },
  // { ...Stylable },
  { ...anchorPositioning },
  { ...customScrollbars },
  // { ...CrossDocumentViewTransitions },
  // { ...ScrollDrivenAnimations },
  // { ...ScrollSnapEvents },
  // { ...BackDropInheritence },
  { ...lightDarkText },
  // { ...atproperty },
  { ...thePopoverAPI },
  // { ...atstartingstyle },
  { ...rubyAlign },
  { ...paintOrder },
  // { ...CSSOMNestedDeclarationsFooter },
  { ...textWrap },
  { ...hidden },
  ];