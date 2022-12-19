export type CarBrand = {
  id: number;
  name: string;
};

export type FormEvent<T> = Event & {
  currentTarget: EventTarget & T;
};
