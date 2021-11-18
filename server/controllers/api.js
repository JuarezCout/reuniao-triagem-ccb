
import ListaReuniao from '../models/listaReuniao.js'

export const getLists = async (req, res) => {
    try {
        const lists = await ListaReuniao.findById()        
        res.status(200).json(lists)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const getList = async (req, res) => { 
    const { id } = req.params
    try {
        const list = await ListaReuniao.findById(id)        
        res.status(200).json(list)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createList = async (req, res) => {
    const data = req.body;

    const newListaReuniao = new ListaReuniao(data)

    try {
        await newListaReuniao.save();

        res.status(201).json(newListaReuniao );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
