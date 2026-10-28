const express= require('express');
const router= express.Router();
const Book= require('../model/bookmodel');


router.post('/',async(req,res)=>{
    try{
        const {title, author ,category}= req.body;
        if(!title || !title.trim()){
            return res.status(400).json({message:"Book title is requires"});
        }
        const book = await Book.create({title,author,category});
        res.status(201).json({message:"Book added"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})



router.get('/api/books', async (req, res) => {
    try {
        const pg = parseInt(req.query.page)|| 1;
        const limit = parseInt(req.query.limit)||10;
        
        const skip = (pg - 1) * limit;
        const books = await Book.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        const totalRecords = await Book.countDocuments();
        res.status(200).json({ message: 'Books retrieved', books, page: pg, totalRecords });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// update book availability status
router.put('/api/books/:id', async (req, res) => {
    try{
        const{id}= req.params;
        const{available}=req.body;l
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }   
        book.available=available;
        await book.save();
        res.status(200).json({message:"Book availability updated"});
    }   
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports= router;
