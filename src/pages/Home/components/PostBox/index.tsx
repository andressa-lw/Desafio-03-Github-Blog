import { PostType } from "../.."
import { dateFormatter } from "../../../../utils/formatter"
import { PostBoxContainer } from "./styles"

interface PostProps {
  post: PostType
}

export function PostBox({ post }: PostProps) {
  const formattedDate = dateFormatter(post.created_at)

  return (
    <PostBoxContainer to={`post/${post.number}`}>
      <div className="infoTop">
        <h2>{post.title}</h2>
        <span>{formattedDate}</span>
      </div>

      <p>{post.body}</p>
    </PostBoxContainer>
  )
}
