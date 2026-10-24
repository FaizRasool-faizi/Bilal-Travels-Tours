import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITraveller extends Document {
  id: string;
  name: string;
  gender: "male" | "female";
  image?: string;
  passportNumber: string;
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  flightDetails: string;
  address: string;
  tripCategory: string;
  status: "Completed" | "Traveling Now" | "Upcoming";
  notes?: string;
  visaImage?: string;
  visaType?: string;
  visaNumber?: string;
  visaExpiryDate?: string;
  createdAt: string;
}

const TravellerSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    gender: { type: String, enum: ["male", "female"], default: "male" },
    image: { type: String, default: "" },
    passportNumber: { type: String, required: true, trim: true },
    departureCity: { type: String, default: "Lahore" },
    destination: { type: String, default: "Makkah & Madinah (Umrah)" },
    departureDate: { type: String, required: true },
    returnDate: { type: String, default: "" },
    flightDetails: { type: String, default: "" },
    address: { type: String, default: "" },
    tripCategory: { type: String, default: "Umrah" },
    status: {
      type: String,
      enum: ["Completed", "Traveling Now", "Upcoming"],
      default: "Traveling Now",
    },
    notes: { type: String, default: "" },
    visaImage: { type: String, default: "" },
    visaType: { type: String, default: "Umrah Visa" },
    visaNumber: { type: String, default: "" },
    visaExpiryDate: { type: String, default: "" },
    createdAt: { type: String, default: () => new Date().toISOString() },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation of model in hot reloads
const Traveller: Model<ITraveller> =
  mongoose.models.Traveller || mongoose.model<ITraveller>("Traveller", TravellerSchema);

export default Traveller;
