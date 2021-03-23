import {Route, Switch, Redirect} from 'react-router-dom';
import {useState} from 'react';
import ColorForm from './ColorForm';
import Colors from './Colors';
import Color from './Color';

const Routes = () => {
    const [colors, setColors] = useState([])

    const addColor = (newColor) => {
        setColors(data => ([...data, {...newColor}]))
    }
    return (
        <Switch >
            <Route exact path="/"> <Colors colors={colors} /> </Route>
            <Route exact path="/colors/form"> <ColorForm addColor={addColor} /> </Route>
            <Route exact path="/color/:name"> <Color colors={colors} /> </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;