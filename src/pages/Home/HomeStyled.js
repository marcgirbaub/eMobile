import styled from "@emotion/styled";

const HomeStyled = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  .mobiles {
    display: grid;
    align-items: center;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 20px;
  }
`;

export default HomeStyled;
