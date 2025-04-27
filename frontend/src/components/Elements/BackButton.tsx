import { useRouter } from "next/router";
import Image from "next/image";

export default function BackButton() {
    const router = useRouter();

    return (
        <div className="absolute top-[10%] left-[28%]" >
            <button onClick={() => router.back()} className="cursor-pointer"><Image src={"/icons/back.png"} alt="back" height={30} width={30} /></button>
        </div>
    );
}