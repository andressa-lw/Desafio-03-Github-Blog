import { useCallback, useState, useEffect } from "react"
import { PostBox } from "./components/PostBox"
import { Profile } from "./components/Profile"
import { SearchForm } from "./components/SearchForm"
import { PostsListContainer } from "./styles"
import { api } from "../../lib/axios"
import { Spinner } from "../../components/Spinner"

const username = "rocketseat-education"
const reponame = "reactjs-github-blog-challenge"

export interface PostType {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query = "") => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchForm postsLength={posts.length} getPosts={getPosts} />

      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <PostBox key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  )
}
