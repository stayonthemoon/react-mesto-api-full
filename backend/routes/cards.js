const router = require('express').Router();
const { cardSchemaValidate, likeSchemaValidate, cardDeleteSchemaValidate } = require('../utils/validation');

const {
  getCards,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', cardSchemaValidate, createCard);
router.put('/:cardId/likes', likeSchemaValidate, likeCard);
router.delete('/:cardId/likes', likeSchemaValidate, dislikeCard);
router.delete('/:cardId', cardDeleteSchemaValidate, deleteCard);

module.exports = router;