"use client";

import GenerateButton from "@/components/generateButton";
import Lotto from "@/components/lotto";
import Navigation from "@/components/navigation";
import { MouseEventHandler, useState } from "react";

export default function Home() {
    const [lotto, setLotto] = useState<Array<LOTTO>>([]);
    const [i, setI] = useState<number>(0);

    const pushLotto: MouseEventHandler = () => {
        setI(i + 1);

        const nextLotto: LOTTO = {
            IDX: i,
            PICK_DATE: new Date(),
            NUMBERS: [12, 20, 30, 40, 41, 42],
            BONUS: 32,
        };

        setLotto([nextLotto, ...lotto]);
    };

    return (
        <main className="min-h-screen">
            <Navigation />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        LOTTO
                    </h1>
                    <GenerateButton pushLotto={pushLotto} />
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {lotto.map((l, idx) => (
                        <Lotto key={idx} seq={l.IDX} data={l} />
                    ))}
                </div>
            </main>
        </main>
    );
}
