import { useState } from "react";
import Home from "../home/Home";
import Students from "../students/Students";
import type { Student } from "../../types";

const Main = () => {
  const [editing, setEditing] = useState<Student | null>(null);

  return (
    <div>
      <Home editing={editing} setEditing={setEditing} />
      <Students setEditing={setEditing} />
    </div>
  );
};

export default Main;
