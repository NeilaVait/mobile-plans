import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobile-plan';

function App() {
  return (
    <div className="App">
      <Commitment></Commitment>
      <HaveServices></HaveServices>
      <MobilePlan></MobilePlan>
    </div>
  );
}

export default App;
