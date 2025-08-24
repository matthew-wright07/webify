import PrimaryButton from "../buttons/PrimaryButton";
import { PiDesktopBold } from "react-icons/pi";
import { PiDeviceTabletSpeakerBold } from "react-icons/pi";
import { PiDeviceMobileBold } from "react-icons/pi";
import AlertButton from "../buttons/SecondaryButton";

export default function TopBar(){
    return (
        <div className="bg-bgSecondary px-2 py-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img src="/logo.svg" alt="Logo" className="h-8" />
                <h1 className="text-2xl font-bold">Webify</h1>
            </div>
            <div className="flex gap-4 items-center">
                <PiDeviceMobileBold size={26}/>
                <PiDeviceTabletSpeakerBold size={28}/>
                <PiDesktopBold size={30}/>

            </div>
            <div className="flex gap-2 items-center">
                <AlertButton text="Save"/>
                <PrimaryButton text="Publish"/>
            </div>

        </div>
    )
}