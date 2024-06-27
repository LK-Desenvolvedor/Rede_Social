const express = require('express');
const router = express.Router();
const upload = require('../utils/multer'); 

router.post('/upload', upload.single('image'), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Nenhum arquivo enviado' });
    }
    
    res.status(201).json({
      message: 'Imagem carregada com sucesso',
      imagePath: req.file.path
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao carregar imagem', error: error.message });
  }
});

module.exports = router;
