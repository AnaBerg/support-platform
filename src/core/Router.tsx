import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LogedInContainer, LogedOutContainer } from '../containers';

import { user } from '../types/user';

console.log(user);

const Router = () => {
  return (
    <BrowserRouter>
      {user.id ? (
        <Routes>
          <Route index element={<LogedInContainer />} />
        </Routes>
      ) : (
        <Routes>
          <Route index element={<LogedOutContainer />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
