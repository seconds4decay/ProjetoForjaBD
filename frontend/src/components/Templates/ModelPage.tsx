import Sidebar from "@/components/Elements/Sidebar";
import Card from "@/components/Elements/Card";
import { Entidade } from "../Interfaces";
import VisualizarModel from "../Tabelas/visualizarModel";
import Image from "next/image";
import BackButton from "../Elements/BackButton";
import Dashboard from "../Elements/Dashboard";

interface Props {
  title: string;
  href: string;
  model: Entidade;
  dashboardRoute?: string;
  dashboard?: React.ReactNode;
}

export default function ModelPage(props: Props) {

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col gap-7 w-full">
        <div className="flex w-full">
          <div className="bg-[var(--background2)] border border-[var(--bordercolor)] rounded-[var(--borderradius)] ml-[2%] w-full h-[80vh] p-10 flex flex-col items-center justify-center">
            <BackButton />
            <h1 className="absolute top-[15vh]">{props.title}</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              <Card href={`${props.href}/adicionar`}><Image src={"/icons/add.png"} alt="search" width={30} height={30} className="transition delay-40 group-hover:invert-100"/><h2>Adicionar</h2></Card>
              <Card href={`${props.href}/buscar`}><Image src={"/icons/glass.svg"} alt="search" width={30} height={30} className="transition delay-40 group-hover:invert-100"/><h2>Buscar</h2></Card>
            </div>
            
          </div>
          <div className="bg-[var(--background2)] border border-[var(--bordercolor)] rounded-[var(--borderradius)] ml-[2%] w-full h-[80vh] p-1 overflow-y-auto">
              <VisualizarModel entidade={props.model} />
          </div>
        </div>   
          {props.dashboard}
      </div>
    </div>
  )
}

