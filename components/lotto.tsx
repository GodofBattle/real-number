"use client";

const Lotto = ({ seq = 1, data }: { seq?: number; data: LOTTO }) => {
    const seqText = seq.toString().padStart(4, "0");

    const pad = (idx: number) => {
        return idx.toString().padStart(2, "0");
    };

    const digitType = (digit: number) => {
        let style = "size-2.5 rounded-sm flex justify-center items-center";

        if (data.NUMBERS.includes(digit)) {
            style += " bg-red-700 text-white";
        } else if (data.BONUS === digit) {
            style += " bg-orange-300 text-black";
        } else {
            style += " bg-gray-300 text-gray-200";
        }

        return style;
    };

    return (
        <div className="flex flex-wrap font-mono">
            <div className="text-pretty mr-1 py-1">{seqText}</div>
            <div className="flex flex-wrap">
                {Array(45)
                    .fill(0)
                    .map((_, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-wrap items-center justify-center mx-0.5"
                            >
                                <div className={digitType(index + 1)}>
                                    <div className="text-pretty scale-75 items-center">
                                        {pad(index + 1)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Lotto;
