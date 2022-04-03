import styled from 'styled-components';
import {RATING_COEFFICIENT} from '../../const';

export const RatingValue = styled.span<{ roundedRating: number }>`
  width: ${(p) => `${p.roundedRating * RATING_COEFFICIENT}}%`};
`;
