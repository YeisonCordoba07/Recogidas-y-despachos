// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Socio} from '@prisma/client';
import prisma from '@/service/prisma';



type Data = {
  socios?: Socio[];
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "GET"){
    const socios = await prisma.socio.findMany(
      {orderBy:{
        nombre: "asc",
      }}
    );
    res.status(200).json({ socios });
  }

  if(req.method === "POST"){
    const {} = req.body;
    console.log(req.body);
    return res.status(500).json({message: "No está implementado"});
  }

  return res.status(405).json({message: "Metodo no disponible"});

}
