import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="#about"><a>About</a></Link>
                <Link href=""><a>Research</a></Link>
                <Link href=""><a>Skills</a></Link>
                <Link href=""><a>Publications</a></Link>
                <Link href="/resources"><a>Resources</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;