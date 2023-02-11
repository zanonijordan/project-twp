import styled, { css } from 'styled-components';

export const Container = styled.h1`
    ${({ theme }) => css`
    font-size: ${({ theme }) => theme.font.sizes.large};
    color: purple;
    `}
`;
