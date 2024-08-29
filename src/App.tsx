import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Call Check Auth Function here
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-blue-gradient">
        <Outlet />
      </main>
    </>
  );
}

export default App;
