import React from "react";
import "./loader.css";
import { RaceBy } from "@uiball/loaders";

function Loader(props) {
  return (
    <RaceBy size={220} lineWeight={5} speed={0.8} color="black" {...props} />
  );
}
export default Loader;