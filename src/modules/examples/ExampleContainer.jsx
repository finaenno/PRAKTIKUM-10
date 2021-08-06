import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ExampleDetailPage from './pages/ExampleDetail';
import ExampleListPage from './pages/ExampleList';

export const ExampleContainer = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/:id`}>
        <ExampleDetailPage />
      </Route>
      <Route path={`${match.url}`}>
        <ExampleListPage />
      </Route>
    </Switch>
  );
};

export default ExampleContainer;
