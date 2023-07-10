import styled from "@emotion/styled";

const HomeStyled = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 40px;
      text-align: center;
      line-height: 38px;
    }

    &__slogan {
      margin-right: 14px;
    }

    &__search {
      @media (min-width: 600px) {
        max-width: 350px;
      }

      width: 100%;
    }
  }

  .not-found {
    align-self: center;
    font-style: italic;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
`;

export default HomeStyled;
