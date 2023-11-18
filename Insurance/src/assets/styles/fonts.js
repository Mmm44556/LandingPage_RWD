import { css } from 'styled-components';
import KarlaRegular from '@fonts/Karla-Bold/Karla-Regular.ttf';
import KarlaBold from '@fonts/Karla-Bold/Karla-Bold.ttf';

import DMSerifDisplayRegular from '@fonts/DMSerifDisplay/DMSerifDisplay-Regular.ttf';


const KarlaNormalWeights = {
  400: [KarlaRegular],
  700: [KarlaBold]
}

const DMSerifDisplayWeights = {
  400: [DMSerifDisplayRegular]
}

const Karla = {
  name: 'Karla',
  normal: KarlaNormalWeights
}

const DMSerifDisplay = {
  name: 'DMSerifDisplay',
  normal: DMSerifDisplayWeights
}

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const ttf = formats[0];


    styles += `
      @font-face {
        font-family:'${family.name}-${weight}';
        src: url(${ttf}) format('truetype');
        font-weight:${weight};
        font-display:none;
        font-style:normal;

      }
    `;
  }

  return styles;
};

const karla = createFontFaces(Karla);
const DMserif = createFontFaces(DMSerifDisplay);

const Fonts = css`
  ${karla + DMserif}
`;

export default Fonts;