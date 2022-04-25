import { Header } from './components';

import './style.css';

const LogedInContainer = () => {
  return (
    <div className="logedInRoot">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="contantContainer">LogedInContainer</div>
    </div>
  );
};

export default LogedInContainer;
