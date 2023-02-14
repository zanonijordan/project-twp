// import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackground';

export const Home = ({ children }) => {
    return (
        <Styled.Container>
            <SectionBackground>
                <Heading />
            </SectionBackground>
        </Styled.Container>
    );
};

// Home.propTypes = {

// };


