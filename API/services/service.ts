import * as knex from '../repository/db'
import { Frases } from '../interface/interface'


async function inserirFraseService(req: Request | any, res: Response | any): Promise<Response>{
    
    const novaFrase: Frases={ ...req }

    const response=await knex.default
                       .insert(novaFrase)
                       .from('frases')
                       .then( _=>res.status(201).json({msg: 'frase inserida com sucesso'}))
                       .catch(_=>res.status(400)
                                    .json({msg: 'houve um erro ao inserir a frase'}))

    return response

}

async function atualizarFraseService(req: Request | any, res: Response | any): Promise<Response>{
    
    const body={ ...req.body }
    const novaFrase: Frases={ ...body }

    const id={ ...req.params }

    const response=await knex.default
                       .update(novaFrase)
                       .from('frases')
                       .where(id)
                       .then( _=>res.status(201).json({msg: 'frase atualizada com sucesso'}))
                       .catch(_=>res.status(400)
                                    .json({msg: `houve um erro ao atualizar a frase`}))

    return response

}

async function obterFraseService(req: Request | any, res: Response | any): Promise<Response>{
    
    const response=await knex.default
                       .select()
                       .from('frases')
                       .then(frases=>res.status(200).json(frases))
                       .catch(_=>res.status(500)
                                    .json({msg: 'ocorreu um erro com o servidor'}))

    return response

}

async function obterFrasePorIdService(req: Request | any, res: Response | any): Promise<Response>{

    const response=await knex.default
                       .select()
                       .from('frases')
                       .where({ ...req })
                       .then(frases=>res.status(200).json(frases))
                       .catch(_=>res.status(500)
                                    .json({msg: 'ocorreu um erro com o servidor'}))

    return response

}

async function deletarFrasePorIdService(req: Request | any, res: Response | any): Promise<Response>{

    const response=await knex.default
                       .delete()
                       .from('frases')
                       .where({ ...req })
                       .then(_=>res.status(204).json(_))
                       .catch(_=>res.status(500)
                                    .json({msg: 'ocorreu um erro com o servidor'}))

    return response

}

export { inserirFraseService, atualizarFraseService, obterFraseService, 
         obterFrasePorIdService, deletarFrasePorIdService }