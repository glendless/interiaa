import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn, token } from '../env';

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
});