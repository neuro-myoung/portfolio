import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
         setTimeout(() => {
            router.push('/')
         }, 3000)
    }, []);

    return ( 
        <div className="notFound">
            <h1>Oops...</h1>
            <p>The page you are looking for cannot be found.</p>
            <p>Go back <Link href="/"><a>Home</a></Link> or you will automatically be redirected in 3 seconds...</p>
        </div>
     );
}
 
export default NotFound;