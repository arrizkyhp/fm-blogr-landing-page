
import './assets/css/style.css';
import Home from 'pages/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename='/fm-blogr-landing-page'>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
