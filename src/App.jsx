import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-500">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
