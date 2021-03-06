import { BrowserRouter, Switch } from 'react-router-dom';

import { LogedInContainer, LogedOutContainer } from '../containers';

import { user } from '../utils/mock';

const Router = () => {
  return (
    <BrowserRouter>
      {user.id ? (
        <Switch>
          <LogedInContainer />
        </Switch>
      ) : (
        <Switch>
          <LogedOutContainer />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
