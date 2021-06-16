import React from 'react';
import { SousTitleStc } from "./SousTitle.stc";
const SousTitle = (props) => {
  const { texte, color, text_transform } = props;
  return <SousTitleStc 
          text-transform={text_transform} 
          color={color}>{texte}
        </SousTitleStc>;
};

export default SousTitle;