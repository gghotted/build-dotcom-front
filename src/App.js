import New from 'post/New';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>root</div>}></Route>
        <Route path="post/">
          <Route path="new/" element={<New/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
