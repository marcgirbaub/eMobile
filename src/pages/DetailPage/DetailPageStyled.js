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
    gap: 12px;

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

    &__actions {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .actions {
    &__button {
      background-color: ${({ theme }) => theme.palette.backgroundButton};
      border: 1px solid ${({ theme }) => theme.palette.secondary.light};
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    &__buttons-container {
      display: flex;
      gap: 14px;
    }

    &__title {
      margin-bottom: 10px;
    }

    &__add-button {
      background-color: ${({ theme }) => theme.palette.contrast};
      border: 1px solid ${({ theme }) => theme.palette.secondary.light};
      font-weight: bold;
      padding: 10px 12px;
      border-radius: 6px;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.palette.background.default};
      margin-bottom: 6px;
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
