const express = require('express');
const router = express.Router();
const { getInquiries, createInquiry, updateInquiryStatus, deleteInquiry } = require('../controllers/inquiryController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getInquiries).post(createInquiry);
router.route('/:id').put(protect, updateInquiryStatus).delete(protect, deleteInquiry);

module.exports = router;
