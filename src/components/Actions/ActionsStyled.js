import styled from "@emotion/styled";

const ActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

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
`;

export default ActionsStyled;
