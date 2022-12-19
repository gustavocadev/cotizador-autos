import type { FormEvent } from 'src/types/types';
import { writable } from 'svelte/store';
import { getYearDifference } from '../helpers/getYearDifference';

type InitialState = {
  // initial state
  brand: string;
  year: string;
  plan: string;
  messageError: string;
  resultCotizacion: string;
};

const INITIAL_STATE: InitialState = {
  // initial state - reactive variable
  brand: '',
  year: '',
  plan: '',
  messageError: '',
  resultCotizacion: '',
};

const cotizadorProvider = () => {
  const { subscribe, set, update } = writable<InitialState>(INITIAL_STATE);
  // actions

  const handleChangeData = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    update((state) => {
      return {
        ...state,
        [event.currentTarget.name]: event.currentTarget.value,
      };
    });
  };
  const setMessageError = (errorMsg: string) => {
    update((state) => {
      return {
        ...state,
        messageError: errorMsg,
      };
    });
  };

  const setBrand = (brand: string) => {
    update((state) => {
      return {
        ...state,
        brand,
      };
    });
  };
  const setYear = (year: string) => {
    update((state) => {
      return {
        ...state,
        year,
      };
    });
  };
  const setPlan = (plan: string) => {
    update((state) => {
      return {
        ...state,
        plan,
      };
    });
  };

  const cotizarSeguro = (data: Omit<InitialState, 'messageError'>) => {
    // una base
    let result = 2000;
    // obtener la diferencia de años
    const difference = getYearDifference(data.year);
    console.log(difference);
    // hay que restar el 3% por cada año
    result -= (difference * 3 * result) / 100;
    // americano 15%
    // europeo 30%
    // asiatico 5%
    if (data.brand === '1') {
      result *= 1.15;
    } else if (data.brand === '2') {
      result *= 1.3;
    } else if (data.brand === '3') {
      result *= 1.05;
    }

    // basico aumenta 20%
    if (data.plan === '1') {
      result *= 1.2;
    }
    // completo 50%
    if (data.plan === '2') {
      result *= 1.5;
    }
    console.log('Cotizando...');
    update((state) => {
      return {
        ...state,
        resultCotizacion: String(result),
      };
    });
  };

  return {
    subscribe,
    set,
    update,
    // here thre is no reactive variable, only functions to change the state
    handleChangeData,
    setMessageError,
    cotizarSeguro,
    setBrand,
    setYear,
    setPlan,
  };
};

export const cotizadorStore = cotizadorProvider();
