import React from "react";
import CV from "react-cv";
import { CVData } from "../data/data";
import "./_styles.scss";

const BodyContent: React.FC = (): JSX.Element => {
  return (
    <div>
      <CV {...CVData} branding={false} />
    </div>
  );
};

export default BodyContent;
