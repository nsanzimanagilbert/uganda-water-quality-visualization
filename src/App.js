import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/styles/index.less'
import 'rsuite/dist/rsuite.min.css'
import './App.css';

import SideNav from './components/SideNav';
import SampleChartOne from './components/charts/SampleChartOne';

function App() {
  return (
    <div className="App d-flex bd-highlight" style={{width: '100%'}}>
      <div className='side-nav'>
      <SideNav></SideNav>
      </div>
      <div className='main-content p-2 flex-grow-1 bd-highlight'>
        <SampleChartOne></SampleChartOne>

      </div>
      
     
    </div>
  );
}

export default App;
