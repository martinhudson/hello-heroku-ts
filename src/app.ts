import express, { Request, Response } from 'express';

const app = express();

//api calls
app.get('/api/v1/test', async (request:Request, response:Response) => {
  response.send('APIs responding - test 1');
})

export default app;
