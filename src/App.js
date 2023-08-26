
import './App.css';
import ProjectData from './data/folderdata'
import {useState} from 'react'
import Folder from './components/Folder';

function App() {
  const [project,setProject] = useState(ProjectData);
  

  return (
    <div className="App">
        Hello Duniya !!! VScode filing from Sahil.
        <Folder project = {project} />
        <div style={{backgroundColor : 'yellow' }}>FO : FOLDER : YELLOW</div>
        <div style={{backgroundColor : 'greenyellow' }}>FI : FILE : GREEN</div>
    </div>
  );
}

export default App;
