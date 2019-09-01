import * as express from 'express'

export const ping = (req: express.Request, res: express.Response) => {
  res.json({ message: "pong" })
}