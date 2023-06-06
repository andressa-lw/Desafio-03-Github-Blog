import styled from "styled-components"
import { Link } from "react-router-dom"

export const PostBoxContainer = styled(Link)`
  background-color: ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  border-radius: 0.625rem;
  border: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors["base-label"]};
  }

  .infoTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    h2 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
