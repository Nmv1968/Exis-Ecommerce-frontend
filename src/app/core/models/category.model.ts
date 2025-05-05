export namespace CategoryModel {
  export interface CategoryResponse {
    id: string;
    name: string;
    image?: string;
    miniature?: string;
    description?: string;
    additionalInfo?: string;
    subcategories?: CategoryResponse[];
    route?: string;
  }
}
