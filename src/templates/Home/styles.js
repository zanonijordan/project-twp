import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        height: 100vh;
        width: 100%;
        margin: 0 auto;
    `}
`;
