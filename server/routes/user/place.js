import express from 'express';
import renderError from '../../utils/renderError.js'

const router = express.Router();

// @ENDPOINT: http://localhost:3000/api/user/places/
router.get('/', (req, res) => {
    try{
        res.json('Get all places')
    }catch(err){
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// @ENDPOINT: http://localhost:3000/api/user/places/create-place
router.post('/create-place', (req, res) => {
    try{
        // const { title, price, address, category, description } = req.body 
        res.json({ message: 'Place created successfully'})
    }catch(err){
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// @ENDPOINT: http://localhost:3000/api/user/places/update-place/:id
router.put('/update-place/:id', (message, res) => {
    try{
        // const {id} = req.params
        // const { title, price, address, category, description } = req.body 
        res.json({ message: 'Place updated successfully'})
    }catch(err){
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// @ENDPOINT: http://localhost:3000/api/user/places/delete-place/:id
router.delete('/delete-place/:id', (req, res) => {
    try{
        // const {id} = req.params
        res.json({message: 'Place deleted successfully'})
    }catch(err){
        res.status(500).json({ message: 'Internal Server Error' });
    }
})
export default router