import { rest } from 'msw';
import faker from 'faker';

export const examples = [
  rest.get('/api/examples', (req, res, ctx) => {
    const total = 1000;
    const limit = req.url.searchParams.get('limit');
    const offset = req.url.searchParams.get('offset');

    return res(
      ctx.json({
        data: Array.from({ length: limit }, () => ({
          id: faker.datatype.uuid(),
          nama: faker.name.findName(),
          nilai: faker.datatype.number(100),
          tanggal: faker.date.past(),
          status: faker.helpers.randomize(['sukses', 'warning', 'gagal']),
        })),
        meta: {
          limit,
          offset,
          total,
        },
      })
    );
  }),
  rest.get('/api/examples/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: faker.datatype.uuid(),
          nama: faker.name.findName(),
          nilai: faker.datatype.number(100),
          tanggal: faker.date.past(),
          status: faker.helpers.randomize(['sukses', 'warning', 'gagal']),
        },
      })
    );
  }),
];
