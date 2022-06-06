import './app.scss';
import { FormWithState } from './components/form-with-state';
import { FormWithRef } from './components/form-with-ref'

function App() {
  return (
    <div className="App">
      <FormWithState />
      <FormWithRef />
    </div>
  );
}

export default App;
