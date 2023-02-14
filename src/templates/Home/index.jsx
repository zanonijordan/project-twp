// import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackground';
import { Menu } from '../../components/Menu';

export const Home = ({ children }) => {
    return (
        <Styled.Container>
                <Menu />
            <SectionBackground>
                <Heading />
            </SectionBackground>
        </Styled.Container>
    );
};

// Home.propTypes = {

// };


