import { useContext, Fragment } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/product-card/product-card.component';

import './products.styles.scss';

const Products = () => {
  const { productsMap } = useContext(ProductsContext);
  return (
    <Fragment>
      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <div className="products-container">
            {productsMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Products;
