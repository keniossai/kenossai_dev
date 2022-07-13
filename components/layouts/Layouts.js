import Link from "next/link"
import HomePage from "../Home/HomePage"
import Resume from "../Resume/Resume"
import Service from "../Contact/Service"

const Layouts = ({children}) => (
    <div className="pages">
        <Link exact href='/'>
        <HomePage />
      </Link>
      <Link href='/resume'>
        <Resume />
      </Link>
      <Link href='/contact'>
        <Service />
      </Link>
      {children}
    </div>

)

export default Layouts