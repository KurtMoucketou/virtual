import React from 'react';
import { SousTitleStc } from "./SousTitle.stc";
const SousTitle = (props) => {
  const { texte, color, text__transform, font__size, font__weight, text__align } = props;
  return <SousTitleStc 
          text-transform={text__transform} 
          font-size={font__size}
          font-weight={font__weight}
          text-align={text__align}
          color={color}>{texte}
        </SousTitleStc>;
};

export default SousTitle;