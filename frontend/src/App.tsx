import { RouterProvider } from "@tanstack/react-router"
import { router } from "./routes/Router"
import NotificationProvider from "@context/NotificationProvider"

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App
