import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Question from "@/models/Question";

export async function GET() {
  try {

    await connectMongoDB();

    const questions = await Question.find();

    return NextResponse.json({ questions }, { status: 200 });

  } catch (error) {

    return NextResponse.json(
      { message: "Error fetching questions" },
      { status: 500 }
    );

  }
}