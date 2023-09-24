import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // 동적인 데이터 이므로 false
  apiVersion: '2023-09-24',
  token: process.env.SANITY_SECRET_TOKEN,
});
