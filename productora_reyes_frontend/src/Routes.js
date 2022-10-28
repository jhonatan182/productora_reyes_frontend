import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
}

export default Routes;