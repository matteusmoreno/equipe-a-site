import React from 'react';
import { TitleWrapper, StyledTitle } from './SectionTitle.styles';

const SectionTitle = ({ children }) => {
    return (
        <TitleWrapper>
            <StyledTitle>{children}</StyledTitle>
        </TitleWrapper>
    );
};

export default SectionTitle;