import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children }) => {
    return (
        <Styled.Container>
            <SectionContainer>{children}</SectionContainer>
        </Styled.Container>
    );
};

SectionBackground.propTypes = {
    children: P.node.isRequired,
};
