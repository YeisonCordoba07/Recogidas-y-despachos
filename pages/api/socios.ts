// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Socio} from '@prisma/client';
import prisma from '@/service/prisma';



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
