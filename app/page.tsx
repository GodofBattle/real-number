"use client";

import GenerateButton from "@/components/generateButton";
import Lotto from "@/components/lotto";
import Navigation from "@/components/navigation";
import { MouseEventHandler, useState } from "react";

export default function Home() {
    const [lotto, setLotto] = useState<Array<LOTTO>>([]);
    const [sequnce, setSequnce] = useState<number>(1111);

    const pushLotto: MouseEventHandler = async () => {
        setSequnce(sequnce + 1);

        const res = await fetch(`/api/lotto/generate/${sequnce}`);
        const { result } = await res.json();

        const nextLotto: LOTTO = {
            IDX: sequnce,
            PICK_DATE: new Date(),
            NUMBERS: [
                result.drwtNo1,
                result.drwtNo2,
                result.drwtNo3,
                result.drwtNo4,
                result.drwtNo5,
                result.drwtNo6,
            ],
            BONUS: result.bnusNo,
        };

        setLotto([nextLotto, ...lotto]);
    };

    const pushTensorFlow = async () => {
        const res = await fetch(`/api/lotto/ml`);
        const { result } = await res.json();
        console.info(result);
    };

    return (
        <main className="min-h-screen">
            <Navigation />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        LOTTO
                    </h1>
                    <div className="flex flex-row">
                        <GenerateButton pushLotto={pushLotto} text="GENERATE" />
                        <GenerateButton
                            pushLotto={pushTensorFlow}
                            text="TENSOR FLOW"
                        />
                    </div>
                </div>
            </header>
            <main className="min-h-full overflow-y-auto">
                <div className="min-h-full mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {lotto.map((l, idx) => (
                        <Lotto key={idx} seq={l.IDX} data={l} />
                    ))}
                </div>
            </main>
        </main>
    );
}
