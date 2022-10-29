import './App.css';
import useAppCtrl from './useAppCtrl'
import Header from './Header/Header'
import {
  BrowserRouter,
  Routes,
  Route
}
from 'react-router-dom'
import ContentContainer from './ContentContainer/ContentContainer'
import tabContentBinding from './tabContentBinding';
import ErrorHandler from './ErrorHandler';

function App() {
  const ctrl = useAppCtrl();
  const tabContents = tabContentBinding({ rootCtrl: ctrl })
  const routes = Object.entries(tabContents).map(
    ([key, value]) => {
      return <Route
      key={key}
      path={value.route}
      element={<ContentContainer content={ value } pageName={ key } rootCtrl={ ctrl } />}
      />
    }
  )

return (
  <div className="App">
    <BrowserRouter>

      <Header rootCtrl={ctrl} tabContents={tabContents} />
      <hr />

      <Routes>
        {routes}
      </Routes>

    </BrowserRouter>
    <ErrorHandler />
  </div>
);
}

export default App;
