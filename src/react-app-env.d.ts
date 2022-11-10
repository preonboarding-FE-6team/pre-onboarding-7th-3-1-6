/// <reference types="react-scripts" />

import 'styled-components';
import responsive from './styles/theme/responsive';
import color from './styles/theme/color';
import * as mixin from './styles/theme/mixin';

declare module 'styled-components' {
  interface DefaultTheme {
    responsive: typeof responsive;
    color: typeof color;
    mixin: typeof mixin;
  }
}
