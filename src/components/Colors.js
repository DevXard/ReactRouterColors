
import { Link} from 'react-router-dom';

const Colors = ({colors}) => {
    

    return( 
        <div>
            <div style={{backgroundColor: 'black', height: "200px"}}>
            <h2 style={{color: 'white', padding:"50px"}}>Welcome to the Color Factory</h2>
                <Link style={{color: 'white', fontSize: '21px'}} to={`/colors/form`} >Add Color</Link>
            </div>
        
        {colors.map(color => <li><Link key={color.colorName} to={`color/${color.colorName}`}>{color.colorName}</Link></li>)} 
        </div>
    )
}

export default Colors;
