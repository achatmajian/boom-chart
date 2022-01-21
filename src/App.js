

import './App.css';

import BarChartUser from './Components/BarChartUser';
import BarChartRepo from './Components/BarChartRepo';
import LineChartUser from './Components/LineChartUser';
import LineChartRepo from './Components/LineChartRepo';

function App() {
  return (
    <div className="App">
  
      <div className="chart-container">
        <BarChartUser />
        <br></br><br></br>
        <hr></hr>
        <br></br><br></br>
        <BarChartRepo />
      </div>

      <div className="chart-container">
        <LineChartUser />
        <br></br><br></br>
        <hr></hr>
        <br></br><br></br>
        <LineChartRepo />
      </div>

    </div>
  );
}

export default App;
