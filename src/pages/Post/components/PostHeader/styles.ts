import styled from "styled-components"

export const PostHeaderContainer = styled.section`
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  .infoTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    a,
    button {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes["components-link"]};
      line-height: 160%;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["brand-blue"]};
      border: 0;
      border-bottom: 1px solid transparent;
      transition: all 0.3s;
      cursor: pointer;
      background-color: transparent;
      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors["brand-blue"]};
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    line-height: 130%;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 520px) {
    ul {
      flex-direction: column;
    }
  }
`
