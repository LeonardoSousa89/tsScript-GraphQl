import { inserirFraseService,
         atualizarFraseService, 
         obterFraseService, 
         obterFrasePorIdService, 
         deletarFrasePorIdService } from '../services/service'


function inserirFraseController(req: Request | any, res: Response | any ): Promise<Response>{

    return inserirFraseService(req, res)

}

function atualizarFraseController(req: Request | any, res: Response | any ): Promise<Response>{

    return atualizarFraseService(req, res)

}

function obterFraseController(req: Request | any, res: Response | any): Promise<Response>{

    return obterFraseService(req, res)

}

function obterFrasePorIdController(req: Request | any, res: Response | any): Promise<Response>{

    return obterFrasePorIdService(req, res)

}

function deletarFrasePorIdController(req: Request | any, res: Response | any): Promise<Response>{

    return deletarFrasePorIdService(req, res)

}


export { inserirFraseController, obterFraseController, atualizarFraseController,
         obterFrasePorIdController, deletarFrasePorIdController }