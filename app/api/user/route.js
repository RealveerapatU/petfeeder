import { NextResponse } from "next/server";
import { mysqlpool } from "../../../utils/server.js";
const db = mysqlpool.promise();

export async function POST(request) {
  try {
    const { username } = await request.json();
    const [result] = await db.query(`SELECT * FROM Users WHERE usernames=?`, [
      username,
    ]);
    if (result.length > 0) {
      return NextResponse.json(
        { message: "Success", users: result },
        { status: 200 }
      );
    }
    
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const [result] = await db.query(`SELECT * FROM Users `);
    if (result.length > 0) {
      return NextResponse.json(
        { message: "Success", users: result },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
