import Sidebar from "@/components/Elements/Sidebar";
import { Entidade } from "../Interfaces";
import BackButton from "../Elements/BackButton";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default function ModelPage(props: Props) {

  return (
    <div className="flex">
      
      <Sidebar />
      <div className="bg-[var(--background2)] border border-[var(--bordercolor)] rounded-[var(--borderradius)] ml-[2%] mb-[10%] w-full h-[80vh] p-10 flex flex-col items-center justify-center shadow-lg shadow-gray-500/50">
        <BackButton />
        <h1>{props.title}</h1>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {props.children}
        </div>
      </div>
    </div>  
  );
}

