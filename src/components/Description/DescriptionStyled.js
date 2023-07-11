import styled from "@emotion/styled";

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .description {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__price {
      font-weight: bold;
      font-size: 1.6rem;

      &--no-stock {
        color: ${({ theme }) => theme.palette.secondary.main};
      }
    }

    &__title {
      font-weight: bold;
    }

    &__value {
      font-weight: normal;
    }
  }

  .horizontal-separator {
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.secondary.light};
    margin: 0 auto;
  }
`;

export default DescriptionStyled;
