import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInserNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={explorerData} handleInserNode={handleInserNode} />
    </div>
  );
}

export default App;
