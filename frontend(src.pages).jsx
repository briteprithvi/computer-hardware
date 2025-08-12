import React, { useEffect, useState } from "react";
import Tutorial from "../components/Tutorial";

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tutorials")
      .then((res) => res.json())
      .then(setTutorials)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Hardware Repair Tutorials</h1>
      {tutorials.map((tutorial) => (
        <Tutorial key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  );
};

export default TutorialsPage;
