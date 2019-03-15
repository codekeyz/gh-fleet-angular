export interface DataList<T> extends Data<T[]> {
  count: number;
}

export interface Data<T> {
  data: T;
}

export interface Vehicle {
  id: string;
  name: string;
  color: string;
  archived: boolean;
  fuel_volume_units: string;
  vehicle_type_name: string;
  vehicle_type_model: string;
  license_plate: string;
  owner: User;
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  username: string;
  email: string;
  telephone: string;
}

export interface Image {
  _id: string;
  name: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}
