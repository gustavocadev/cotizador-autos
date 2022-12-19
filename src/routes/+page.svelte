<script lang="ts">
  import CarForm from '$lib/CarForm.svelte';
  import Result from '$lib/Result.svelte';
  import type { FormEvent } from 'src/types/types';
  import { cotizadorStore } from '../store/cotizadorStore';
  import type { PageData } from './$types';
  export let data: PageData;

  $: carBrands = data.brands;
  // show the store state
  console.log($cotizadorStore);
  const { setMessageError, cotizarSeguro } = cotizadorStore;

  let planProp = '';
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      brand: string;
      year: string;
    };
    cotizadorStore.setBrand(data.brand);
    cotizadorStore.setYear(data.year);
    cotizadorStore.setPlan(planProp);
    const values = [data.brand, planProp, data.year];
    if (values.includes('')) {
      setMessageError('Todos los campos son obligatorios');
      return;
    }
    setMessageError('');
    cotizarSeguro($cotizadorStore);
  };
</script>

<header class="p-6">
  <h1 class="text-white text-center text-4xl">Cotizador de seguros de auto</h1>
</header>

<main
  class="dark:bg-gray-900 bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10"
>
  <form on:submit|preventDefault={handleSubmit}>
    <CarForm {carBrands} bind:planProp />

    <button
      type="submit"
      class="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded w-full"
      >Cotizar</button
    >
  </form>
  {#if $cotizadorStore.resultCotizacion}
    <Result {carBrands} />
  {/if}
</main>
