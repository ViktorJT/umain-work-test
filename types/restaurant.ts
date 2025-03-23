export type Restaurant = {
  id: string;
  name: string;
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  filter_ids: string[];
};

export type RestaurantWithOpenStatus = Restaurant & { isOpen: boolean };

export type Restaurants = {
  restaurants: Restaurant[];
};

export type RestaurantsWithOpenStatus = {
  restaurants: RestaurantWithOpenStatus[];
};
