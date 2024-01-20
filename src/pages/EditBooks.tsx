import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// import { IProduct } from '@/types/globalTypes';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditBooks() {
 
  const[data,setData] = useState();


  const _id = useParams();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((item) => item._id===parseInt(_id._id));
      
        if (foundItem) {
         setData(foundItem) ;
          
        } else {
          console.log('Item not found');
          
        }
      })
      .catch((error) => {
        
        console.error('Error fetching data:', error);
      });
  }, [_id]);
  


  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Edit Book Information</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  value={data?.title}
                //   onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
                  className="mt-2"
                  value={data?.author}
                //   onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  className="mt-2"
                  value={data?.genre}
                //   onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="text"
                  id="price"
                  className="mt-2"
                  value={data?.price}
                //   onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="price">Publication Data</Label>
                <Input
                  type="text"
                  id="price"
                  className="mt-2"
                  value={data?.publication_date || ''}
                //   onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
         
        </div>
        <div className="mt-5 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
