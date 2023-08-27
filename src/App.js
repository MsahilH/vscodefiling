
import './App.css';
import ProjectData from './data/folderdata'
import {useState} from 'react'
import Folder from './components/Folder';
import useTravers from './hooks/useTravers';

function App() {
  const [project,setProject] = useState(ProjectData);
  const {insertNode} = useTravers()
  const handleInsertNode = (folderId, item ,isFolder) => {
    const finalTree = insertNode(project,folderId, item ,isFolder);
    setProject(finalTree);
  }


  return (
    <div className="App">
        Hello Duniya !!! VScode filing from Sahil.
        <Folder handleInsertNode = {handleInsertNode} project = {project} />
        <div style={{backgroundColor : 'yellow' }}>FO : FOLDER : YELLOW</div>
        <div style={{backgroundColor : 'greenyellow' }}>FI : FILE : GREEN</div>
    </div>
  );
}

export default App;
