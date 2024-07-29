import './styling/App.css';
import NavBar from './components/navbar/NavBar';
import CategoryHome from './components/category/categoryHome';
import ItemList from './layout/listviews/ItemList';
import ProductPage from './layout/profiles/ProductPage'
import {Products} from './test_data/products.js'
import FeaturedHome from './components/featured/featuredHome';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CategoryHome></CategoryHome>
      <div className="container">
      {/* <ItemList data={Products}></ItemList> */}
      {/* <ProductPage></ProductPage> */}
      {/* <FeaturedHome></FeaturedHome> */}
      </div>
    </div>
  );
}

export default App;
