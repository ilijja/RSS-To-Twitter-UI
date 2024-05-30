import React, { useContext } from "react";
import UserProgressContext from "@/store/UserProgresContext";


const tabs = [
    { name: 'Y', val: 'blog' },
    { name: 'G', val: 'generate' }
];

const EditToolbar = () => {
    const { currentTab, setTab, setShowModal } = useContext(UserProgressContext);

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <div className="flex justify-between">
            <div className="bg-zinc-800 w-fit p-1 rounded-lg">
                <nav className="flex" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setTab(tab.val)}
                            className={classNames(
                                currentTab === tab.val ? 'bg-zinc-950 text-zinc-50' : 'text-zinc-400',
                                'rounded-md px-6 py-1.5 text-sm font-medium flex justify-center'
                            )}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

        </div>
    );
};

export default EditToolbar;
