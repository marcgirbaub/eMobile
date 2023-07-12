import styled from "@emotion/styled";

const SkeletonListStyled = styled.ul`
  display: grid;
  align-items: center;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 20px;

  .skeleton {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.secondary.light};
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export default SkeletonListStyled;
