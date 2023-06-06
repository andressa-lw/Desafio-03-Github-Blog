import styled from "styled-components"

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .bar {
    width: 7px;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors["brand-blue"]},
      ${({ theme }) => theme.colors["base-label"]} 95%
    );
    margin: 0px 7px;
    border-radius: 50px;
    animation-name: loading;
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .bar:nth-child(1) {
    animation-delay: 0s;
  }

  .bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .bar:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes loading {
    0% {
      height: 22px;
    }

    20% {
      height: 50px;
    }

    40% {
      height: 22px;
    }

    60% {
      height: 22px;
    }

    80% {
      height: 22px;
    }

    100% {
      height: 22px;
    }
  }
`
