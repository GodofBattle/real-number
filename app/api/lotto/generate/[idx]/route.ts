
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type LottoIdx = {
    idx: string;
}

const hasSeq = async (idx: number) => {
    return (await prisma.lotto.count({ where: { id: idx } })) === 1;
}

const GET = async (request: NextRequest, context: { params: LottoIdx }) => {
    const idx: string = context.params.idx;

    // if (await hasSeq(Number(idx))) {

    // } else {

    // }

    const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${idx}`, {
        credentials: 'same-origin',
        mode: 'no-cors',
        cache: 'no-cache'
    });

    let result: ILottoDonghang = await response.json();
    return NextResponse.json({ result });
}

export { GET }