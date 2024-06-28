import { NextRequest, NextResponse } from "next/server";

const GET = (request: NextRequest) => {
    return NextResponse.json({ result: 'ok' })
}

export { GET }