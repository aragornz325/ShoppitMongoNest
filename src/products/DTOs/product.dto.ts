export class CreateProductDTO {
  name: string;
  description: string;
  shortDescription: string;
  stock: number;
  price: string;
  ownerId: string;
  categoryId: string;
  images: string[];
  tags: string[];
}
