import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
  createdAt: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "travellers.json");

function readTravellers(): TravellerRecord[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const raw = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading travellers.json:", error);
    return [];
  }
}

function writeTravellers(travellers: TravellerRecord[]): boolean {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(travellers, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing travellers.json:", error);
    return false;
  }
}

// GET all travellers
export async function GET() {
  const travellers = readTravellers();
  return NextResponse.json({ success: true, data: travellers });
}

// POST: Add new traveller
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      gender,
      image,
      passportNumber,
      departureCity,
      destination,
      departureDate,
      returnDate,
      flightDetails,
      address,
      tripCategory,
      status,
      notes,
    } = body;

    if (!name || !passportNumber || !destination) {
      return NextResponse.json(
        { success: false, error: "Name, Passport Number, and Destination are required." },
        { status: 400 }
      );
    }

    const currentTravellers = readTravellers();
    const newTraveller: TravellerRecord = {
      id: `trv-${Date.now()}`,
      name: name.trim(),
      gender: gender === "female" ? "female" : "male",
      image: image || "",
      passportNumber: passportNumber.trim(),
      departureCity: departureCity || "Lahore",
      destination: destination.trim(),
      departureDate: departureDate || new Date().toISOString().split("T")[0],
      returnDate: returnDate || "",
      flightDetails: flightDetails || "Direct Flight",
      address: address || "",
      tripCategory: tripCategory || "Umrah",
      status: status || "Upcoming",
      notes: notes || "",
      createdAt: new Date().toISOString(),
    };

    currentTravellers.unshift(newTraveller);
    writeTravellers(currentTravellers);

    return NextResponse.json({ success: true, data: newTraveller }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create traveller record" },
      { status: 500 }
    );
  }
}

// PUT: Update traveller
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Traveller ID is required" }, { status: 400 });
    }

    const currentTravellers = readTravellers();
    const index = currentTravellers.findIndex((t) => t.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "Traveller not found" }, { status: 404 });
    }

    currentTravellers[index] = {
      ...currentTravellers[index],
      ...updates,
      gender: updates.gender === "female" ? "female" : "male",
    };

    writeTravellers(currentTravellers);

    return NextResponse.json({ success: true, data: currentTravellers[index] });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update traveller record" },
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
      return NextResponse.json({ success: false, error: "Traveller ID is required" }, { status: 400 });
    }

    const currentTravellers = readTravellers();
    const filtered = currentTravellers.filter((t) => t.id !== id);

    if (filtered.length === currentTravellers.length) {
      return NextResponse.json({ success: false, error: "Traveller not found" }, { status: 404 });
    }

    writeTravellers(filtered);

    return NextResponse.json({ success: true, message: "Traveller removed successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete traveller record" },
      { status: 500 }
    );
  }
}
