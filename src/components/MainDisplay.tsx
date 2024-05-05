import { PersonStanding } from "lucide-react";

const MainDisplay = () => {
    return (
        <div className="border my-10 border-gray-300 rounded-lg shadow-md py-8 px-6 w-[85%]">
            <div className='flex justify-between'>
                <div className="flex align-baseline items-baseline mb-4">
                    <span className="text-red-500 mr-2"></span>
                    <strong className="font-bold text-3xl">❤️77</strong>
                    <span className="">BPM</span>
                </div>
                <div className="flex justify-between mb-4">
                    <strong className="text-green-500 text-3xl">REGULAR</strong>
                </div>
            </div>
            <div className="flex items-center w-full">
                <PersonStanding size={24} />
                <div className="flex justify-between w-full">
                    <span className="font-semibold">STATUS:</span>
                    <strong className="text-blue-500 text-xl">EM ATIVIDADE</strong>
                </div>
            </div>
        </div>
    );
};

export default MainDisplay;
