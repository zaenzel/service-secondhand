/** @format */

const router = require('express').Router();
const TransactionCtl = require('../controllers/transaction');
const transaction_path = '/api/v1/transaction';
const IsAuth = require('../middleware/is-auth');

router.get(`${transaction_path}`, IsAuth, TransactionCtl.getAllRequest);
router.get(`${transaction_path}/buyer`, IsAuth, TransactionCtl.getByBuyer);
router.get(`${transaction_path}/seller`, IsAuth, TransactionCtl.getBySeller);
router.get(`${transaction_path}/:id`, IsAuth, TransactionCtl.getById);
router.put(`${transaction_path}/success/:product_id`, IsAuth, TransactionCtl.finishTransaction);
router.put(`${transaction_path}/cancel/:product_id`, IsAuth, TransactionCtl.cancelTransaction);

module.exports = router;
