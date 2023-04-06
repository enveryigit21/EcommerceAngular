export interface Products {
  filter(arg0: (product: any) => boolean): any;
  title: string, 
  description : string,
  image:string,
  price:number
}