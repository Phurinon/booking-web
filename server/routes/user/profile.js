import express from 'express'
import renderError from '../../utils/renderError.js'

const router = express.Router()

// @ENDPOINT: http://localhost:3000/api/user/profile/my-profile
router.get('/my-profile', (req, res, next) => {
    try {
        res.json('My profile')
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// @ENDPOINT: http://localhost:3000/api/user/profile/create-profile
router.post('/create-profile', (req, res, next) => {
    try{
        const { firstName, lastName, phone, email } = req.body
        if(!firstName || !lastName || !phone || !email){
            return renderError( 400, 'All fields are required')
        }
        console.log(req.body)
        res.json('Profile created successfully')
    }catch (err) {
        // res.status(500).json({ message: 'Internal Server Error' })
        next(err)
    }
})

// @ENDPOINT: http://localhost:3000/api/user/profile/update-profile/:id
router.put('/update-profile/:id', (req, res) => {
    try{
        res.json('Profile updated successfully')
    }catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// @ENDPOINT: http://localhost:3000/api/user/profile/delete-profile/:id
router.delete('/delete-profile/:id', (req, res) => {
    try{
        res.json('Profile deleted successfully')
    }catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})





export default router