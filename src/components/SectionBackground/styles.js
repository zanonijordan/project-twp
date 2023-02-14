import styled, { css } from 'styled-components';
import img from './patrick-perkins.jpg';

export const Container = styled.div`
    ${({ theme }) => css`
        background-image: url(${img});
        max-width: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        display: flex;
        align-items: center;
    `}
`;
