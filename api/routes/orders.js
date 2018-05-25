const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get all orders',
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.orderId,
  };
  res.status(201).json({
    message: 'Order was created',
    order,
  });
});

router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId;
  if (id === 'special') {
    res.status(200).json({
      message: 'you discovered rite path',
      id,
    });
  } else {
    res.status(200).json({
      message: 'you discovered wrong path',
    });
  }
});


router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: 'Order deleted',
  });
});

module.exports = router;
