import { Form } from "./pages/form/index.tsx";
import { usePersistFinanceData } from "./hooks/use-persist-finance-data/index.ts";

function App() {
  usePersistFinanceData();
  return (
    <>
      <Form />
    </>
  );
}

export default App;
