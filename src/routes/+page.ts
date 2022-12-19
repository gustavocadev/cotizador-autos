import type { PageLoad } from './$types';
export const load = (async ({ fetch }) => {
  // cars brands
  const brands = [
    { id: 1, name: 'Americano' },
    { id: 2, name: 'Europeo' },
    { id: 3, name: 'Asiatico' },
  ];

  return {
    brands,
  };
}) satisfies PageLoad;
