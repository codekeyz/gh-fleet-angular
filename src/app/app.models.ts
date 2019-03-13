export interface DataList<T> {
  data: T[];
  count: number;
}
export interface Vehicle {
  id: string;
  name: string;
  color: string;
  archived: boolean;
  fuel_volume_units: string;
  vehicle_type_name: string;
  owner: {};
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  _id: string;
  name: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}
