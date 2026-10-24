import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import connectToDatabase from "@/lib/mongodb";
import Traveller, { ITraveller } from "@/models/Traveller";

export interface TravellerRecord {
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

const dataFilePath = path.join(process.cwd(), "src", "data", "travellers.json");

function readLocalTravellers(): TravellerRecord[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const raw = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading local travellers.json:", error);
    return [];
  }
}

function writeLocalTravellers(travellers: TravellerRecord[]): boolean {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(travellers, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing local travellers.json (ephemeral on Vercel):", error);
    return false;
  }
}

// Convert Mongoose doc to plain clean object
function formatDoc(doc: any): TravellerRecord {
  return {
    id: doc.id || doc._id?.toString(),
    name: doc.name,
    gender: doc.gender || "male",
    image: doc.image || "",
    passportNumber: doc.passportNumber || "",
    departureCity: doc.departureCity || "Lahore",
    destination: doc.destination || "Makkah & Madinah (Umrah)",
    departureDate: doc.departureDate || "",
    returnDate: doc.returnDate || "",
    flightDetails: doc.flightDetails || "",
    address: doc.address || "",
    tripCategory: doc.tripCategory || "Umrah",
    status: doc.status || "Traveling Now",
    notes: doc.notes || "",
    visaImage: doc.visaImage || "",
    visaType: doc.visaType || "Umrah Visa",
    visaNumber: doc.visaNumber || "",
    visaExpiryDate: doc.visaExpiryDate || "",
    createdAt: doc.createdAt?.toString() || new Date().toISOString(),
  };
}

// GET all travellers
export async function GET() {
  try {
    const mongooseConn = await connectToDatabase();

    if (mongooseConn) {
      // 1. Fetch from MongoDB
      const count = await Traveller.countDocuments();

      // Auto-seed if MongoDB is fresh/empty
      if (count === 0) {
        const localData = readLocalTravellers();
        if (localData.length > 0) {
          console.log(`🌱 Seeding MongoDB with ${localData.length} records from travellers.json...`);
          await Traveller.insertMany(localData);
        }
      }

      const docs = await Traveller.find({}).sort({ createdAt: -1 }).lean();
      const travellers = docs.map(formatDoc);

      return NextResponse.json({
        success: true,
        source: "mongodb_cloud",
        count: travellers.length,
        data: travellers,
      });
    }

    // Fallback: Local JSON
    const travellers = readLocalTravellers();
    return NextResponse.json({
      success: true,
      source: "local_fallback",
      count: travellers.length,
      data: travellers,
    });
  } catch (error: any) {
    console.error("GET /api/travellers error:", error);
    // Graceful fallback
    const travellers = readLocalTravellers();
    return NextResponse.json({
      success: true,
      source: "local_fallback_error",
      count: travellers.length,
      data: travellers,
    });
  }
}

// POST: Add new traveller
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.passportNumber) {
      return NextResponse.json(
        { success: false, message: "Name and Passport Number are required" },
        { status: 400 }
      );
    }

    const newRecord: TravellerRecord = {
      id: body.id || `trv-${Date.now()}`,
      name: body.name.trim(),
      gender: body.gender === "female" ? "female" : "male",
      image: body.image || "",
      passportNumber: body.passportNumber.trim(),
      departureCity: body.departureCity || "Lahore",
      destination: body.destination || "Makkah & Madinah (Umrah)",
      departureDate: body.departureDate || new Date().toISOString().split("T")[0],
      returnDate: body.returnDate || "",
      flightDetails: body.flightDetails || "",
      address: body.address || "",
      tripCategory: body.tripCategory || "Umrah",
      status: body.status || "Traveling Now",
      notes: body.notes || "",
      visaImage: body.visaImage || "",
      visaType: body.visaType || "Umrah Visa",
      visaNumber: body.visaNumber || "",
      visaExpiryDate: body.visaExpiryDate || "",
      createdAt: new Date().toISOString(),
    };

    const mongooseConn = await connectToDatabase();

    if (mongooseConn) {
      const created = await Traveller.create(newRecord);
      // Also update local file if running locally
      const local = readLocalTravellers();
      writeLocalTravellers([newRecord, ...local]);

      return NextResponse.json({
        success: true,
        source: "mongodb_cloud",
        message: "Traveller added successfully to MongoDB Cloud",
        data: formatDoc(created),
      });
    }

    // Fallback: Local File
    const travellers = readLocalTravellers();
    travellers.unshift(newRecord);
    writeLocalTravellers(travellers);

    return NextResponse.json({
      success: true,
      source: "local_file",
      message: "Traveller added successfully (Local Storage)",
      data: newRecord,
    });
  } catch (error: any) {
    console.error("POST /api/travellers error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create traveller" },
      { status: 500 }
    );
  }
}

// PUT: Update traveller
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.id) {
      return NextResponse.json(
        { success: false, message: "Traveller ID is required" },
        { status: 400 }
      );
    }

    const mongooseConn = await connectToDatabase();

    if (mongooseConn) {
      const updated = await Traveller.findOneAndUpdate(
        { id: body.id },
        { $set: body },
        { new: true }
      );

      // Also update local file
      const local = readLocalTravellers();
      const updatedLocal = local.map((t) => (t.id === body.id ? { ...t, ...body } : t));
      writeLocalTravellers(updatedLocal);

      return NextResponse.json({
        success: true,
        source: "mongodb_cloud",
        message: "Traveller updated successfully in MongoDB Cloud",
        data: updated ? formatDoc(updated) : body,
      });
    }

    // Fallback
    const travellers = readLocalTravellers();
    const index = travellers.findIndex((t) => t.id === body.id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Traveller not found" },
        { status: 404 }
      );
    }

    travellers[index] = { ...travellers[index], ...body };
    writeLocalTravellers(travellers);

    return NextResponse.json({
      success: true,
      source: "local_file",
      message: "Traveller updated successfully",
      data: travellers[index],
    });
  } catch (error: any) {
    console.error("PUT /api/travellers error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update traveller" },
      { status: 500 }
    );
  }
}

// DELETE: Remove traveller
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Traveller ID is required" },
        { status: 400 }
      );
    }

    const mongooseConn = await connectToDatabase();

    if (mongooseConn) {
      await Traveller.deleteOne({ id });

      // Also remove from local
      const local = readLocalTravellers();
      const filtered = local.filter((t) => t.id !== id);
      writeLocalTravellers(filtered);

      return NextResponse.json({
        success: true,
        source: "mongodb_cloud",
        message: "Traveller deleted successfully from MongoDB Cloud",
      });
    }

    // Fallback
    const travellers = readLocalTravellers();
    const filtered = travellers.filter((t) => t.id !== id);
    writeLocalTravellers(filtered);

    return NextResponse.json({
      success: true,
      source: "local_file",
      message: "Traveller deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE /api/travellers error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete traveller" },
      { status: 500 }
    );
  }
}
