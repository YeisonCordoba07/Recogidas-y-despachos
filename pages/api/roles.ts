// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {Socio} from '@prisma/client';
import prisma from '@/service/prisma';


interface ResponseData{
    socios: Socio[];
}

const rolesApi = async (req: NextApiRequest, res:NextApiResponse<ResponseData>) => {
    const socios = await prisma.socio.findMany();
    res.status(200).json({socios});
}

export default rolesApi;
