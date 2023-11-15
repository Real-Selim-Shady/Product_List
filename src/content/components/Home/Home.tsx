import React, {useState} from 'react';
import Header from '../Header/Header';
import ProductsList from '../ProductsList/ProductsList';
import "./Home.scss";

interface Product{
  title: string,
  price: string,
  description: string,
  seller: string,
  imageUrl: string,
  alt: string,
}
interface HomeProps {
  productsList: Product[]; 
}

const Home: React.FC<HomeProps> = ({productsList})=> {

  const [searchValue, setSearchValue] = useState<string>("");

  const filterProducts = (productsList: Product[], query: string) => {
    return productsList.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredProducts = filterProducts(productsList, searchValue);



  return (
    <div>
      <Header />
      <div className={"text-center"}>
        <div className="input-search-block">
          <input
            type="text"
            placeholder="Search with love..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <ProductsList productsList={filteredProducts} />
      </div>
    </div>
  );
}


export default Home;
