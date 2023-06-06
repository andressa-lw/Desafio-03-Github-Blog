import * as z from "zod"
import { SearchContainer } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query: string) => Promise<void>
}

export function SearchForm({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div className="topInfo">
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchContainer>
  )
}
