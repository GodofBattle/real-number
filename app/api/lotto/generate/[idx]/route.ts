import { NextRequest, NextResponse } from 'next/server';

type LottoIdx = {
    idx: string;
};

// const hasSeq = async (idx: number) => {
//     return (await prisma.lotto.count({ where: { id: idx } })) === 1;
// };

const GET = async (request: NextRequest, { params }: { params: Promise<LottoIdx> }) => {
    const { idx }: LottoIdx = await params;

    // if (await hasSeq(Number(idx))) {

    // } else {

    // }

    const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${idx}`, {
        credentials: 'same-origin',
        mode: 'no-cors',
        cache: 'no-cache',
    });

    const result: ILottoDonghang = await response.json();
    return NextResponse.json({ result });
};

export { GET };
