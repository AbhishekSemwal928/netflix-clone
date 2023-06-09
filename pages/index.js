import BillBoard from "@/components/BillBoard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { getSession, signOut } from "next-auth/react";


export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }

}

export default function Home() {

  const { data: movies=[]} = useMovieList()
  const { data: favorites=[], isLoading} = useFavorites()
  const {isOpen, closeModal} = useInfoModal()

  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <BillBoard/>
      <div className="pd-40">
        <MovieList title="Trending now" data={movies}/>
        <MovieList title="My List" data={favorites}/>
      </div>
    </div>
  )
}

