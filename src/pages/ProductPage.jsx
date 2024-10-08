import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import ProductImages from '../components/product/ProductImages';
import ProductDetails from '../components/product/ProductDetails';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.currentProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <ProductImages images={product.images} />
      <ProductDetails product={product} onAddToCart={handleAddToCart} />
      <RelatedProducts categoryId={product.categoryId} />
    </div>
  );
};

export default ProductPage;