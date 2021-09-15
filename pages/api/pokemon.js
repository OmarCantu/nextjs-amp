import queryString from 'query-string';

export default async function handle(req, res) {
  const { query } = req;
  const urlParam = queryString.stringify(query);

  try {
    const resultApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon?${urlParam || `limit=5`}`,
    );
    const data = await resultApi.json();
    const oldNext = new URL(data.next);
    res.statusCode = 200;
    res.json({
      items: data.results,
      next: `/api/pokemon${oldNext.search}`,
    });
  } catch (error) {
    console.log('Error while getting cards');
    res.statusCode = 500;
    res.json({ error });
  }
}
