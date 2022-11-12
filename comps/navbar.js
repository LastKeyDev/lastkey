import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div>
            <Link href="/aboutme"></Link>
            <Link href="/skill&career"></Link>
            <Link href="/projects"></Link>
            <Link href="/contactme"></Link>
        </div>
        
     );
}
 
export default Navbar;