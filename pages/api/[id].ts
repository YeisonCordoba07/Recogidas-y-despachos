import { NextApiRequest, NextApiResponse } from "next";
import { Socio} from '@prisma/client';


interface ResponseData {
    socios?: Socio[];
    message?: string;
  }

const userApi = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    if (req.method === "PUT") {

    }

    if (req.method === "DELETE") {

    }
    return res.status(405).json({message: "Metodo de permitido"});
};

export default userApi;