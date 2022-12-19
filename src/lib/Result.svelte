<script lang="ts">
  import type { CarBrand } from '../types/types';
  import { cotizadorStore } from '../store/cotizadorStore';
  import { getPlans } from '../helpers/getPlans';
  export let carBrands: CarBrand[];

  $: brandName = carBrands.find(
    (brand) => brand.id === Number($cotizadorStore.brand)
  )?.name;

  $: carPlan = getPlans().find(
    (plan) => plan.id === Number($cotizadorStore.plan)
  )?.name;

  $: console.log($cotizadorStore);
</script>

<div class="text-center mt-5 p-5 shadow bg-gray-800">
  <h1 class="font-black text-3xl">Resumen</h1>

  <p class="my-2">
    <span class="font-bold">Marca:</span>
    <span>{brandName}</span>
  </p>

  <p class="my-2">
    <span class="font-bold">Plan:</span>
    <span>{carPlan}</span>
  </p>

  <p class="my-2">
    <span class="font-bold">Año del auto:</span>
    <span>{$cotizadorStore.year}</span>
  </p>

  <p class="my-2">
    <span class="font-bold">Total cotizacion:</span>
    <span>${$cotizadorStore.resultCotizacion}</span>
  </p>
</div>
