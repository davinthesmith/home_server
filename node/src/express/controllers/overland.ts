import * as express from 'express'

export const create = (req: express.Request, res: express.Response) => {
  console.log(req.body);
}