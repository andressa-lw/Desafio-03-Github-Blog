import { HeaderSection } from "./styles"

import Logo from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderSection>
      <img src={Logo} alt="Logo Github Blog" />
    </HeaderSection>
  )
}
