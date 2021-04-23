import { Drinks } from 'pages/drinks';
import { Events } from 'pages/events';
import { Food } from 'pages/food';
import { Home } from 'pages/home';
import { Locations } from 'pages/locations';
import { Reviews } from 'pages/reviews';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    path="/events"
                    exact
                    component={Events}
                />
                <Route
                    path="/drinks"
                    exact
                    component={Drinks}
                />
                <Route
                    path="/food"
                    exact
                    component={Food}
                />
                <Route
                    path="/reviews"
                    exact
                    component={Reviews}
                />
                <Route
                    path="/locations"
                    exact
                    component={Locations}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
