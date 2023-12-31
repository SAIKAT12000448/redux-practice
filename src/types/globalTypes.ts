export interface IProduct {
  _id: number;
  title: string;
  image: string;
  price: number;
  author: string;
  genre: string;
  status: boolean,
  quantity?: number;
  publication_date?:string;
}
 