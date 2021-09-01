const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
router.get('/', (req, res) => res.render('dashboard'));
router.get('/merch', (req, res) => res.render('merch'));
router.get('/characters', (req, res) => res.render('characters'));
router.get('/posts/create', ensureAuthenticated, (req, res) => res.render('create', { username: req.user.name }));
module.exports = router;
