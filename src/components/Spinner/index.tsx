import { SpinnerContainer } from "./styles"

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </SpinnerContainer>
  )
}
