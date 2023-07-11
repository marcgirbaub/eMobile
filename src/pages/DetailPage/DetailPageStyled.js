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

    &__info {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  @media (max-width: 864px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .horizontal-separator {
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.secondary.light};
    margin: 0 auto;
  }
`;

export default DetailPageStyled;
