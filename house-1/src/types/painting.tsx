
export enum Country {
  FRANCE = 'france',
  GERMANY = 'germany',
  ENGLAND = 'england'
}

export type painting = {
  imgSrc:string,
  artistName:string,
  title:string,
  description:string,
  price:number;
  currency:string;
  country: Country;
}