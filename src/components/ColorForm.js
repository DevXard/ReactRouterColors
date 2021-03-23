import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const ColorForm = ({addColor}) => {

    const [formData, setFormData] = useState({
        colorName: '',
        color: ''
    });
    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData)
        history.push('/')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="colorName"
        placeholder='Color Name'
        value={formData.colorName}
        onChange={handleChange}
        />
        <input 
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        />
        <button>Add Color</button>
    </form>
    )
}

export default ColorForm;