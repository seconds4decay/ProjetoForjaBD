import { useRouter } from "next/router";
import Image from "next/image";

export default function BackButton() {
    const router = useRouter();

    return (
        <div className="flex top-[15%] absolute self-start" >
            <button onClick={() => router.back()} className="cursor-pointer"><Image src={"/icons/back.png"} alt="back" height={30} width={30} /></button>
        </div>
    );
}