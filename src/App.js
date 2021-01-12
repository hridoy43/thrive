import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Home, Login, Profile, Repo } from 'components/pages';
import { signIn, signOut } from 'redux/actions';

import 'styles/global.css';
import 'styles/var.css';

// components

// const Authonticator = (setUser, dispatch) => {
//     fireb.auth().onAuthStateChanged((user) => {
//         if (user) {
//             // setUser(user);
//             dispatch(signIn());
//             console.log('Log: Authonticator -> user', user);
//         } else {
//             // setUser(null);
//             dispatch(signOut());
//         }
//     });
// };

function App() {
    // const [user, setUser] = useState(null);
    const isLogged = useSelector((state) => state.isLogged);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     Authonticator(setUser, dispatch);
    // }, []);

    return (
        <BrowserRouter>
            {isLogged ? (
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
