
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/feature/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { _id } = useParams();
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('../../public/data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleEdit = () => {
    window.location.href = `/editproduct/${_id}`;
    
  }
  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete the product "${product?.title}"?`)) {
      setData(data.filter((item) => item._id !== product?._id));
      }
  }


  const product = data?.find((item) => item._id === Number(_id));

  //! Temporary code ends here

  return (
    <>
        <h1 className='text-2xl text-bold'>Book Details</h1>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mt-5">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
          <p className="text-xl">Author: {product?.author}</p>
          <p className="text-xl">Genre: {product?.genre}</p>
          <p className="text-xl">Publication Date: {product?.publication_date}</p>
        
          <Button onClick={()=>dispatch(addToCart(product!))}>Add to cart</Button>

          <div className="flex space-x-4">
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
