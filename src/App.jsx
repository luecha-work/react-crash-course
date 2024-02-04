import { usePath, useRoutes } from "hookrouter";
import { Suspense, useEffect } from "react";
import Routes from "./Routes";
import LoadingPage from "./components/Common/LoadingPage";
import MainLayout from "./layouts/mainLayout";

function App() {
  useEffect(() => {
    console.log(`App...`);
  }, []);

  const match = useRoutes(Routes);
  const path = usePath().split("/")[1];

  const isLayoutAuth =
    path === "login" || path === "check-auth" || path === "consent";
  const isLayoutMain = !isLayoutAuth;

  return match ? (
    <Suspense fallback={<LoadingPage />}>
      {isLayoutMain && <MainLayout>{match}</MainLayout>}
    </Suspense>
  ) : (
    <div>Page Not Found: 404</div>
  );
}

export default App;
