"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    name: String,
    agr: Number,
    city: String,
    initial: String,
});
//# sourceMappingURL=student.schema.js.map