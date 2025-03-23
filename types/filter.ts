export type Filter = {
  id: string;
  name: string;
  image_url?: string;
};

export type Group = {
  column?: boolean;
  heading: string;
  filters: Filter[];
};

export type FiltersResponse = {
  filters: Filter[];
};

export type Filters = Group[];
