import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  border: 0 solid ${({ theme }) => theme.palette.secondary.light};
  border-bottom-width: 1px;
  position: sticky;
  top: 0;
  z-index: 2;

  .header {
    &__container {
      display: flex;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.palette.background.default};
      padding: 12px 20px;
    }

    &__title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    &__main-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default HeaderStyled;
