import { useState } from "react";
import Home from "../home/Home";
import Students from "../students/Students";

const Main = () => {
  const [editing, setEditing] = useState<any>(null);

  return (
    <div>
      <Home editing={editing} setEditing={setEditing} />
      <Students setEditing={setEditing} />
    </div>
  );
};

export default Main;
