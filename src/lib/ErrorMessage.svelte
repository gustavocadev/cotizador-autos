<script lang="ts">
  import { cotizadorStore } from '../store/cotizadorStore';
</script>

<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
  <p class="font-bold">Error</p>
  <p>{$cotizadorStore.messageError}</p>
</div>
