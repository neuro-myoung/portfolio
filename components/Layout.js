import Navbar from './Navbar'
import Indicator from './Indicator'

const Layout = ({ children }) => {
    return ( 
        <div className="container">
            <Navbar />
            <Indicator />
            { children }
        </div>
     );
}
 
export default Layout;