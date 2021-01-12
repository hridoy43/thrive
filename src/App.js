import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Login, Profile, Repo } from 'components/pages';

import 'styles/global.css';
import 'styles/var.css';

function App() {
    const isLogged = useSelector((state) => state.isLogged);

    return (
        <BrowserRouter>
            {!isLogged ? (
                <Login />
            ) : (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/repo" component={Repo} />
                </Switch>
            )}
        </BrowserRouter>
    );
}

export default App;
