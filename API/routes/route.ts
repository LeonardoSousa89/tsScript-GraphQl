import { Router, Request, Response } from 'express';
import { inserirFraseController, obterFraseController, atualizarFraseController,
         obterFrasePorIdController, deletarFrasePorIdController } from '../controller/controller'

const server=Router()

server.route('/frase').get((req: Request | any, res: Request | any)=>{

    obterFraseController(req, res)

}).post((req: Request | any, res: Response | any)=>{


    inserirFraseController(req.body, res)

})

server.route('/frase/:id').get((req: Request | any, res: Response | any)=>{

    obterFrasePorIdController(req.params, res)

}).delete((req: Request | any, res: Response | any)=>{

    deletarFrasePorIdController(req.params, res)

}).put((req: Request | any, res: Response | any)=>[

    atualizarFraseController(req, res)

])

export { server } 




  