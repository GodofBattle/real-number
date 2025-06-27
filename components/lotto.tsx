'use client';

import { useCallback, useEffect, useState } from 'react';

const Lotto = ({ seq = 1, data }: { seq?: number; data: LOTTO }) => {
    const [bonus, setBonus] = useState<number>(data.BONUS);
    const [numbers, setNumbers] = useState<Array<number>>(data.NUMBERS);

    const seqText = seq.toString().padStart(4, '0');

    const pad = (idx: number) => {
        return idx.toString().padStart(2, '0');
    };

    const digitType = useCallback(
        (digit: number) => {
            let style = 'size-2.5 rounded-sm flex justify-center items-center';

            if (numbers.includes(digit)) {
                style += ' bg-red-700 text-white';
            } else if (bonus === digit) {
                style += ' bg-orange-300 text-black';
            } else {
                style += ' bg-gray-200 text-gray-900 normal-num';
            }

            return style;
        },
        [numbers, bonus]
    );

    const handleClick = useCallback(
        (digit: number) => {
            const numberIdx = numbers.indexOf(digit);

            if (numberIdx !== -1) {
                numbers.splice(numberIdx, 1);
                setNumbers([...numbers]);
                setBonus(digit);
            } else if (bonus === digit) {
                setBonus(-1);
            } else {
                setNumbers([...numbers, digit]);
            }
        },
        [numbers, bonus]
    );

    const handleInit = useCallback(() => {
        if (numbers.length > 0) {
            setNumbers([]);
            setBonus(-1);
        } else {
            setNumbers([...data.NUMBERS]);
            setBonus(data.BONUS);
        }
    }, [numbers, data]);

    // const handlePointerOver = useCallback(() => {}, []);

    useEffect(() => {
        setNumbers([...data.NUMBERS]);
        setBonus(data.BONUS);
    }, [data]);

    return (
        <div className='flex flex-wrap'>
            <button className='text-pretty mr-1 py-1 hover:cursor-pointer' onClick={handleInit}>
                {seqText}
            </button>
            <div className='flex flex-wrap'>
                {Array(45)
                    .fill(0)
                    .map((_, index: number) => {
                        return (
                            <button
                                key={index}
                                className='flex flex-wrap items-center justify-center mx-0.5 hover:cursor-pointer'
                                type='button'
                                onClick={() => handleClick(index + 1)}
                            >
                                <div className={`${digitType(index + 1)}`}>
                                    <div className='text-pretty scale-75 items-center'>{pad(index + 1)}</div>
                                </div>
                            </button>
                        );
                    })}
            </div>
            <div className='text-pretty ml-1 py-1'>
                {data.PICK_DATE.toLocaleDateString('ko-KR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </div>
        </div>
    );
};

export default Lotto;
