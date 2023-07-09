import styled from "@emotion/styled";
import { borderColor } from "../../styles/colors";

const MobileStyled = styled.div`
  border-radius: 4px;
  border: 1px solid ${borderColor};
  min-width: 300px;

  .mobile {
    &__info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }

    &__image {
      object-fit: contain;
      margin: 10px 0;

      &-container {
        background-color: #fff;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${borderColor};
        padding: 10px;
      }
    }

    &__price {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

export default MobileStyled;
