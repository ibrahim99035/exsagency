const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const BrandFormSchema = new Schema({
  brandName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  brandDescription: { type: String, required: true },
  pageUrl: { type: String },
  goal: { type: String },
  
  products: [ProductSchema], // Array of products
  topSellingList: [ProductSchema], // Array of top-selling products

  launchDate: { type: Date },
  socialMediaObjectives: [{ type: String }], // Array of objectives
  targetAudience: [{ type: String }], // Array of target audiences
  targetGender: { type: String, enum: ['Male', 'Female'] },
  targetAgeSpan: { 
    min: { type: Number },
    max: { type: Number }
  }, // Min-Max Age span

  socialPlatforms: [{ type: String }], // List of selected social media platforms
  brandTagline: { type: String },
  brandPositioning: { type: String },
  competitiveAdvantage: { type: String },
  competitors: [{ type: String }], // Array of competitors

  budget: { type: Number },
  currentOffers: [{ type: String }], // Array of current offers
  pointsToNotice: [{ type: String }], // Array of points to notice
  notes: { type: String },

  // Add flag for status
  statusFlag: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BrandForm = mongoose.model('Application', BrandFormSchema);

module.exports = BrandForm;