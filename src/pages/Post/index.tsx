import { useCallback, useEffect, useState } from "react"
import { PostHeader } from "./components/PostHeader"
import { PostType } from "../Home"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"
import { PostContent } from "./components/PostContent"

const username = "rocketseat-education"
const reponame = "reactjs-github-blog-challenge"

export function Post() {
  const [postData, setPostData] = useState<PostType>({} as PostType)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostData = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostData()
  }, [])

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
