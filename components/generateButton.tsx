"use client";

import { MouseEventHandler } from "react";

const GenerateButton = ({ pushLotto }: { pushLotto: MouseEventHandler }) => {
    return (
        <button
            type="button"
            className="flex justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:bg-slate-500"
            onClick={pushLotto}
        >
            GENERATE
        </button>
    );
};

export default GenerateButton;
