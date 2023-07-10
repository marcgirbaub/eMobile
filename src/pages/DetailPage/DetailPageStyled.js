import styled from "@emotion/styled";

const DetailPageStyled = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  gap: 80px;

  .detail {
    &__image {
      border-radius: 4px;
    }
  }

  @media (max-width: 864px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__price {
      font-weight: bold;
      font-size: 1.6rem;
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

export default DetailPageStyled;
