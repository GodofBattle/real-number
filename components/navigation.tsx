import { HomeModernIcon } from '@heroicons/react/24/solid';
import React, { ReactNode } from 'react';

const Navigation = (): ReactNode => {
    return (
        <div className='bg-gray-800'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <HomeModernIcon className='h-8 w-8 text-zinc-100' />
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <a
                                    href='#'
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium aria-current='page'"
                                >
                                    Lotto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
