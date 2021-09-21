import {useRouteMatch, Switch, Route} from 'react-router-dom';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import StartPage from './routes/Start';

const GamePage = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
};

export default GamePage;