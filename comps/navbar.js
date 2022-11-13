import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div>
            <Link href="/aboutme">About me</Link>
            <Link href="/skill&career">Skills and career</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contactme">Social links</Link>
        </div>
        
     );
}
 
export default Navbar;