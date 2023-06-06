import { useNavigate } from "react-router-dom"
import { PostHeaderContainer } from "./styles"
import iconLink from "../../../../assets/arrow-up.svg"
import iconGithub from "../../../../assets/github-brands.svg"
import iconCalendar from "../../../../assets/calendar-day.svg"
import iconComment from "../../../../assets/comment.svg"
import iconBack from "../../../../assets/chevron-left.svg"
import { PostType } from "../../../Home"
import { Spinner } from "../../../../components/Spinner"
import { dateFormatter } from "../../../../utils/formatter"

interface PoostHeaderProps {
  postData: PostType
  isLoading: boolean
}

export function PostHeader({ isLoading, postData }: PoostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = dateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="infoTop">
            <button onClick={goBack}>
              <img src={iconBack} alt="Ícone Voltar" /> voltar
            </button>
            <a href={postData.html_url} target="_blank">
              github <img src={iconLink} alt="Ícone Github" />
            </a>
          </div>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <img src={iconGithub} alt="Ícone Github" /> {postData.user.login}
            </li>
            <li>
              <img src={iconCalendar} alt="Ícone data" /> {formattedDate}
            </li>
            <li>
              <img src={iconComment} alt="Ícone comentários" />{" "}
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
