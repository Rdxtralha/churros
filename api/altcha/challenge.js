// api/altcha/challenge.js
import { createChallenge } from '@altcha/server';

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const challenge = createChallenge(ip);
  res.status(200).json(challenge);
}
