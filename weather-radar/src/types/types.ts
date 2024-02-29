export interface City {
  name: string;
  lat: number;
  lon: number;
}

export enum CityOption {
  AllCities = 'Kaikki kaupungit',
  Espoo = 'Espoo',
  Jyväskylä = 'Jyväskylä',
  Kuopio = 'Kuopio',
  Tampere = 'Tampere',
}
