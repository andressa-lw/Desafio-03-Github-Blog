import styled from "styled-components"

export const SearchContainer = styled.form`
  .topInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
    h3 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
      line-height: 160%;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
    span {
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      line-height: 160%;
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  input {
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 0.375rem;
    width: 100%;
    color: ${({ theme }) => theme.colors["base-text"]};
    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`
