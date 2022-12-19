<script lang="ts">
  import { getPlans } from '../helpers/getPlans';
  import { getLast20Years } from '../helpers/getLast20Years';
  import type { CarBrand } from '../types/types';
  import { cotizadorStore } from '../store/cotizadorStore';
  import ErrorMessage from './ErrorMessage.svelte';
  export let carBrands: CarBrand[];
  export let planProp = '';
  // how to use my prop function
  const years = getLast20Years();
  const plans = getPlans();

  let planGroup = {
    id: '',
    name: '',
  };

  $: planProp = String(planGroup.id);
</script>

{#if $cotizadorStore.messageError.length !== 0}
  <ErrorMessage />
{/if}
<div class="my-5">
  <label for="brands">Marca</label>
  <select
    class="w-full p-3 bg-gray-800  border-gray-200 rounded"
    id="brands"
    name="brand"
  >
    <option value="">--Selecciona Marca --</option>
    {#each carBrands as brand}
      <option value={brand.id}>{brand.name}</option>
    {/each}
  </select>
</div>

<div class="my-5">
  <label for="years">Año</label>
  <select
    class="w-full p-3 bg-gray-800  border-gray-200 rounded"
    id="years"
    name="year"
  >
    <option value="">--Seleccione el año --</option>
    {#each years as year}
      <option value={year}>{year}</option>
    {/each}
  </select>
</div>

<div class="my-5">
  <label for="plans">Elige un plan:</label>
  <div class="flex gap-3">
    {#each plans as plan}
      <div class="flex items-center gap-2">
        <label for="">{plan.name.toUpperCase()}</label>
        <input type="radio" bind:group={planGroup} name="plan" value={plan} />
      </div>
    {/each}
  </div>
</div>
