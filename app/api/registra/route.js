import { NextResponse } from "next/server";
import { mysqlpool } from "../../../utils/server.js";
const db = mysqlpool.promise();
export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const avatars = "https://tinyurl.com/38cx6btk";
    const [result] = await db.query(`INSERT INTO Users VALUES(?,?,?)`, [
      username,
      password,
      avatars,
    ]);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
