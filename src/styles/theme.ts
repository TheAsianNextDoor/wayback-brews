import {
    extendTheme,
    theme as chakraTheme,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
    ...chakraTheme.fonts,
    body: `Inter`,
    heading: `Inter`,
};
const fontWeights = {
    normal: 300,
    medium: 600,
    bold: 700,
};
const fontSizes = {
    xs: `12px`,
    sm: `14px`,
    md: `16px`,
    lg: `18px`,
    xl: `20px`,
    "2xl": `24px`,
    "3xl": `28px`,
    "4xl": `36px`,
    "5xl": `48px`,
    "6xl": `64px`,
};

const breakpoints = createBreakpoints({
    sm: `30em`,
    md: `48em`,
    lg: `62em`,
    xl: `80em`,
    "2xl": `96em`,
});

const overrides = {
    ...chakraTheme,
    breakpoints,
    fonts,
    fontWeights,
    fontSizes,
};

const theme = extendTheme(overrides);

export default theme;
