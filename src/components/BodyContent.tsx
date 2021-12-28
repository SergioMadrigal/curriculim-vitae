import React from "react";
import CV from "react-cv";
import { CVData } from './data';
import './_styles.scss'

const BodyContent: React.FC = (): JSX.Element => {
    return (
        <CV
            {...CVData}
            branding={false}
        />
    );
};

export default BodyContent;
