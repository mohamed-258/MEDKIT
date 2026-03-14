import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Question from "@/models/Question";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    await connectMongoDB();

    const question = await Question.create(body);

    return NextResponse.json({
      message: "Question added successfully",
      question
    });

  } catch (error) {

    return NextResponse.json(
      { message: "Error adding question" },
      { status: 500 }
    );

  }

}