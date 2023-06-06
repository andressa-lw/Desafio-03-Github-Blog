import { ProfileImg, ProfileContainer, ProfileInfos } from "./styles"
import iconLink from "../../../../assets/arrow-up.svg"
import iconGithub from "../../../../assets/github-brands.svg"
import iconCompany from "../../../../assets/building.svg"
import iconFollowers from "../../../../assets/user-group.svg"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import { Spinner } from "../../../../components/Spinner"

const username = "andressa-lw"

interface ProfileInfo {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  followers: number
}

export function Profile() {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({} as ProfileInfo)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileInfo = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)

      setProfileInfo(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileInfo])

  useEffect(() => {
    getProfileInfo()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfileImg src={profileInfo.avatar_url} alt="Foto perfil" />

          <ProfileInfos>
            <div className="infoTop">
              <strong>{profileInfo.name}</strong>
              <a href={profileInfo.html_url} target="_blank">
                github <img src={iconLink} alt="Ícone Github" />
              </a>
            </div>

            <p>{profileInfo.bio}</p>

            <ul>
              <li>
                <img src={iconGithub} alt="Ícone Github" /> {profileInfo.login}
              </li>
              {profileInfo?.company && (
                <li>
                  <img src={iconCompany} alt="Ícone Empresa" />{" "}
                  {profileInfo.company}
                </li>
              )}
              <li>
                <img src={iconFollowers} alt="Ícone Usuários" />{" "}
                {profileInfo.followers} seguidores
              </li>
            </ul>
          </ProfileInfos>
        </>
      )}
    </ProfileContainer>
  )
}
