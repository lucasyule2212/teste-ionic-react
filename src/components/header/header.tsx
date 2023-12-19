import movieIconImage from 'assets/movieIcon.svg'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import PathConstants from 'routes/pathConstants'
import SearchForm from '../searchForm/searchForm'
import ThemeToggle from './themeToggle'

export default function Header() {
  return (
    <div className="flex h-[10vh] w-full items-center justify-between bg-ionicGray px-4 py-2 dark:bg-transparent">
      <div className="flex items-center gap-5">
        <Link
          to={PathConstants.HOME}
          className="flex gap-2 text-2xl font-extrabold"
        >
          <img src={movieIconImage} alt="" width={25} height={25} />
          IonicMovies
        </Link>
        <SearchForm />
      </div>

      <div className="flex items-center gap-10">
        <Link to="/favorites" className="flex gap-1 font-semibold text-ionic">
          Favorites <Star className="fill-ionic" width={20} />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  )
}
