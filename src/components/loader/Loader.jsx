import React from "react";

import { RaceBy } from "@uiball/loaders";

function Loader(props) {
  return (
    <RaceBy size={500} lineWeight={7} speed={0.8} color="black"  {...props} />
  );
}
export default Loader;