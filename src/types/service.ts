export interface ApiService {
  id: number;
  title: string;
  slug: string;
  sub_title: string | null;
  description: string | null;
  price: number;
  features: string[] | null;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
}
