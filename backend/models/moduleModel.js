const mongoose = require('mongoose');
require('./courseModel');

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  videoUrl: {
    type: String,
    required: [true, 'Video URL is required']
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
}, {
  timestamps: true
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
