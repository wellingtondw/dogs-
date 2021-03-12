import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
       <Routes />
       <GlobalStyle />
      </Provider>
    </Router>
  );
}

export default App;
