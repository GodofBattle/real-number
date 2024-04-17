
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const hasSeq = async (idx: number) => {
    return (await prisma.lotto.count({ where: { id: idx } })) === 1;
}

const GET = () => {
    return NextResponse.json({ result: 'ok' });
}

export { GET }