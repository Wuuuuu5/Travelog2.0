import Herosection from '../components/hero.jsx'
import SearchBar from '../components/search/searchbar.jsx'

const Home = () => {
  return (
    <>
      <Herosection />
      <SearchBar />
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-2">
        </div>
      </div>
    </>
  )
}

export default Home
