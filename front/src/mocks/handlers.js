import { rest } from 'msw';
import questionData from './data/questions';

export const handlers = [
  // Get All  Post
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questionData));
  }),

  // Get Post By Content Id
  rest.get('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const matchIdData = questionData.find(
      ({ contentId }) => contentId === Number(id),
    );

    return res(ctx.status(200), ctx.json(matchIdData), ctx.delay());
  }),

  // Create New Post
  rest.post('/api/questions/ask', (req, res, ctx) => {
    questionData.unshift(req.body);

    return res(ctx.status(201), ctx.delay());
  }),

  // Access Request Cookies
  rest.post('/api/login', (req, res, ctx) => {
    const { authToken } = req.cookies;
    const { id } = req.body;

    console.log(id);

    if (authToken === id) {
      return res(
        ctx.delay(),
        ctx.json({
          id: 'mock1234',
          username: 'mock 유저',
        }),
      );
    }
    return res(
      ctx.delay(),
      ctx.json({ message: 'Failed to Authenticate' }),
      ctx.status(403),
    );
  }),

  // Get Filtered Items by Search
  rest.get('/api/search?q=:keyword', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('q').toUpperCase();

    const filteredItems = questionData.filter((question) =>
      question.title.toUpperCase().includes(keyword),
    );

    return res(ctx.status(200), ctx.json(filteredItems));
  }),

  // Update Vote Count

  rest.put('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const status = req.body;
    const modified = { ...questionData[id], status };

    // console.log('id', id);
    console.log('status', status);
    console.log('modi', modified);

    return res(ctx.delay(), ctx.status(200), ctx.json(modified));
  }),

  // Auth
];
