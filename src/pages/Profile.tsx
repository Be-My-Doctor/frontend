import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Phone, MapPin, Ambulance, LineChart, CirclePlus, BadgeCheck } from "lucide-react";

export default function Profile() {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-100 min-h-screen py-8">

            {/* Profile information */}
            <div className="bg-white w-[90vw] flex flex-col max-w-md p-6 rounded-lg shadow-md mb-4">
                <div className="flex">
                    <Avatar className="w-16 h-16 rounded-full border-4 border-sky-500">
                        <AvatarImage src="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ml-2">
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold">John Doe</h1>
                            <BadgeCheck className="text-green-500 ml-2 mt-2" size={24} />
                        </div>
                        <p className="text-gray-600">Age: 30</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-gray-600 mb-2">Location: New York, USA</p>
                <MapPin className="text-gray-600 mb-2" size={20} />
            </div>

            {/* Contact */}
            <div className="bg-white w-[90vw] max-w-md p-6 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Close Contacts</h2>
                <div className="flex justify-between">
                    <p className="text-gray-600 mb-2">Person 1: +55 11 98462-2756</p>
                    <Phone className="text-gray-600 mb-2" size={20} />
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 mb-2">Person 2: +1 123-456-7890</p>
                    <Phone className="text-gray-600 mb-2" size={20} />
                </div>
            </div>

            {/* better to make it a component later */}

            <div className="flex flex-col w-[90vw] justify-between">
                <div className=" flex my-3 justify-between">
                    <Button className="bg-sky-500 text-2xl">
                        <LineChart size={24} className="mr-1" /> Generate Report
                    </Button>
                    <Button>
                        <CirclePlus size={20} className="mr-1" />More
                    </Button>
                </div>
                <div>
                    <AlertDialog>
                        <AlertDialogTrigger className="flex w-full font-bold text-4xl bg-red-500 px-4 py-2 rounded-lg justify-center cursor-pointer">
                            <Ambulance size={40} className="mr-1" /> EMERGENCY
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Call Emergency</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We will send a message to your closest contacts and call an ambulance for you.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </div>
            </div>
        </div>
    );
}

