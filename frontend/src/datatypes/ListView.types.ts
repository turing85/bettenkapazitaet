/* eslint-disable @typescript-eslint/camelcase */

export enum BedState {
  free,
  occupied,
  maybe,
  out_of_order,
  unknown
}

export enum BedType {
  normal,
  imc,
  icu,
  covid,
  covidIcu
}

export enum WardTypes {
  normal,
  imc,
  icu,
  covid
}

export interface Bed {
  id: string;
  name: string;
  stateLastChanged: string;
  bedType: BedType;
  bedState: BedState;
}

export interface Ward {
  id: string;
  name: string;
  wardType: WardTypes;
  bed: Bed[];
}

export interface Department {
  id: string;
  name: string;
  ward: Ward[];
}

export interface ListData {
  id: string;
  name: string;
  maxCapacity: number;
  lat: string;
  long: string;
  department: Department[];
}