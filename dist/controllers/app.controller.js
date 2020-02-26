"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _auth = require("../middleware/auth.middleware");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _auth2.default, function (req, res) {
  res.json({ success: true });
});

exports.default = router;