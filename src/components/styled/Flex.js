import styled, { css } from 'styled-components';

const getAlignValue = value => {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'space-between':
      return 'space-between';
    case 'space-around':
      return 'space-around';
    default:
      return null;
  }
};

export const flex = css`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${getAlignValue(justifyContent)};`}
  ${({ justifySelf }) => justifySelf && `justify-self: ${getAlignValue(justifySelf)};`}
  ${({ alignItems }) => alignItems && `align-items: ${getAlignValue(alignItems)};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${getAlignValue(alignSelf)};`}
  ${({ basis }) => basis && `flex-basis: ${basis};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ css }) => css && css}
`;

const Flex = styled.div`
  ${flex}
`;

export const FlexSpan = styled.span`
  ${flex}
`;

export const FlexSection = styled.section`
  ${flex}
`;

export const FlexArticle = styled.article`
  ${flex}
`;

export const FlexMain = styled.main`
  ${flex}
`;

export default Flex;
