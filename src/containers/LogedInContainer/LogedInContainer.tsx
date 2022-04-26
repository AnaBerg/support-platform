import { Route } from 'react-router-dom';

import { Header } from './components';
import {
  AdmPage,
  BatteriesPage,
  DashboardPage,
  StationsPage,
  SupportPage,
} from '../../pages';

import './style.css';

const LogedInContainer = () => {
  return (
    <div className="logedInRoot">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="contantContainer">
        <Route path="/" exact component={DashboardPage} />
        <Route path="/administration" component={AdmPage} />
        <Route path="/batteries" component={BatteriesPage} />
        <Route path="/stations" component={StationsPage} />
        <Route path="/support" component={SupportPage} />
      </div>
    </div>
  );
};

export default LogedInContainer;
