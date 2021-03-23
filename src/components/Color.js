import {useParams, Link} from 'react-router-dom';

const Color = ({colors}) => {
    console.log(colors)
    const {name} = useParams();
    const color = colors.filter(color => color.colorName === name)

    return (
        <div style={{backgroundColor: `${color[0].color}`}}>
            <h1>This is {color[0].colorName}</h1>

            <h1> Isnt it Beautiful ?</h1>

            <Link to="/">Back</Link>
        </div>
    )
}

export default Color;
