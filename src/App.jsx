import './App.css';
import './index.css';
import './dist/output.css';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
    return (
        <div className="App">
            <h1 className="p-4 border-gray-200">Header</h1>
            <ProductsList></ProductsList>
            <h1>Footer</h1>
        </div>
    );
}

export default App;
