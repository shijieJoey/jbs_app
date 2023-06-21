import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

    return (
        <Provider store={store}>
            <div>
                Tests
            </div>
        </Provider>
    );
}

export default App;
