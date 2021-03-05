import { Provider } from "react-redux";
import { store } from "../store";
import RepositoriesList from "./RepositoriesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h3>Search for a NPM package</h3>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
