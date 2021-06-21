import React from 'react';
import { SousTitleStc } from "./SousTitle.stc";
const SousTitle = (props) => {
  const { texte, color, text__transform, font__size, font__weight } = props;
  return <SousTitleStc 
          text-transform={text__transform} 
          font-size={font__size}
          font-weight={font__weight}
          color={color}>{texte}
        </SousTitleStc>;
};

export default SousTitle;