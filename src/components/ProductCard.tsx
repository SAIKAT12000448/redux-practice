import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/feature/cart/cartSlice';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div className="rounded-2xl h-96 flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all gap-2">
    <Link to={`/product-details/${product._id}`} className="w-full">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={product?.image}
        alt="product"
      />
    </Link>
    <div className='flex'>
      <div>
      <h1 className="text-xl font-semibold mt-3">{product?.title}</h1>
      <p className="text-gray-600">Author: {product?.author}</p>
    <p className="text-sm">
      Availability: {product?.status ? 'In stock' : 'Out of stock'}
    </p>
    <p className="text-sm font-semibold">Price: ${product?.price}</p>
    <span className="text-sm font-semibold">published: ${product?.publication_date}</span>
      </div>
    
    </div>
    
  </div>
  );
}
