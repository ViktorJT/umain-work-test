export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  filter_ids: string[];
};

export type RestaurantsResponse = {
  restaurants: Restaurant[];
};
