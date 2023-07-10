import styled from "@emotion/styled";

const HomeStyled = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .mobiles {
    display: grid;
    align-items: center;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 20px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 20px;
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
  }
`;

export default HomeStyled;
