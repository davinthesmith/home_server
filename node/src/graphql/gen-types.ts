export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
};

export type Query = {
  __typename?: 'Query';
};

export type Temperature = {
  __typename?: 'Temperature';
  _id: Scalars['String'];
  source: TemperatureSource;
  value: Scalars['Float'];
  dateTime: Scalars['Float'];
};

export type TemperatureInput = {
  source: TemperatureSource;
  value: Scalars['Float'];
  dateTime: Scalars['Float'];
};

export enum TemperatureSource {
  Thermostat = 'THERMOSTAT',
  Kitchen = 'KITCHEN',
  Living = 'LIVING',
  Dining = 'DINING',
  Bedroom1 = 'BEDROOM1',
  Bedroom2 = 'BEDROOM2',
  Bedroom3 = 'BEDROOM3',
  Office = 'OFFICE',
  Garage = 'GARAGE',
  Master = 'MASTER'
}
