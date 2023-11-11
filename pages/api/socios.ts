// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Socio} from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  socios: Socio[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socios = await prisma.socio.findMany();
  res.status(200).json({ socios });
}
