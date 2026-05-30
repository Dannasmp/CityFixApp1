import { getReports } from './reportEngine.js';

jest.setTimeout(10000);

test('Debe obtener reportes desde Supabase', async () => {
  const reports = await getReports();

  expect(Array.isArray(reports)).toBe(true);
  expect(reports.length).toBeGreaterThan(0);

  expect(reports[0]).toHaveProperty('id');
  expect(reports[0]).toHaveProperty('title');
  expect(reports[0]).toHaveProperty('category');
  expect(reports[0]).toHaveProperty('votes');
});
