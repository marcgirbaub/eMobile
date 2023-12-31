import styled from "@emotion/styled";

const MobileStyled = styled.div`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.light};
  min-width: 300px;
  min-height: 350px;

  .mobile {
    &__info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      justify-content: center;
      align-items: center;
    }

    &__image {
      object-fit: cover;
      margin: 10px 0;
      height: 100%;

      &-container {
        background-color: #fff;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.light};
        padding: 10px;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        min-height: 266px;
      }
    }

    &__price {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

export default MobileStyled;
