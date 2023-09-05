import {Link} from 'react-router-dom'

export default function Menu(){

    return(
        <nav classname="menu">
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}