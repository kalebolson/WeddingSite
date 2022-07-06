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

function App() {
  const ctrl = useAppCtrl();

  const routes = Object.entries(tabContentBinding).map(
    ([key, value]) => {
      return <Route
      key={key}
      path={value.route}
      element={<ContentContainer content={ value } pageName={ key } />}
      />
    }
  )

return (
  <div className="App">
    <BrowserRouter>

      <Header parent={ctrl} />
      <hr />

      <Routes>
        {routes}
      </Routes>

    </BrowserRouter>
    
  </div>
);
}

export default App;
