import styled from "styled-components"

export const ProfileContainer = styled.section`
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4.5rem;
  min-height: 18rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`

export const ProfileInfos = styled.div`
  flex: 1;

  .infoTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
    strong {
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-title"]};
    }
    a {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes["components-link"]};
      line-height: 160%;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["brand-blue"]};
      border-bottom: 1px solid transparent;
      transition: all 0.3s;
      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors["brand-blue"]};
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
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
