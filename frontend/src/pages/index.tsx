import Sidebar from "@/components/Elements/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [data1, setData1] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const [data3, setData3] = useState<any[]>([]);

  useEffect(() => {

    const fetchData1 = async () => {
      const response = await fetch("http://localhost:8080/dashboard/qntFerreiroPedidoClienteVenda");
      const responseData = await response.json();
      console.log(responseData);
      setData1(responseData);
    };

    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      const response = await fetch("http://localhost:8080/dashboard/findFerreiroMaisPedidos");
      const responseData = await response.json();
      console.log(responseData);
      setData2(responseData);
    };

    fetchData2();
  }, []);

  useEffect(() => {
    const fetchData3 = async () => {
      const response = await fetch("http://localhost:8080/dashboard/findItemMaisVendido");
      const responseData = await response.json();
      console.log(responseData);
      setData3(responseData);
    };

    fetchData3();
  }, []);

  return (
    <div> 
      <div style={{ display: "flex" }}> 
        <Sidebar />
        <div className="flex flex-col gap-10 w-[100%]">
          <div className="flex h-[45%] w-[97.5%] ml-[40px] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-8 shadow-lg shadow-gray-500/50">
            <div className="self-center ml-10 mr-10">
              <strong className="text-[25px] text-[var(--elementcolor)]">Bem vindo ao Forja APP!</strong>
              <p className="text-[20px]">Sua forja possui atualmente . . .</p>
            </div>
             {Object.entries(data1)[0] != undefined && <div className="flex flex-row justify-self-center justify-center items-center ml-[12%]">
              <div className="flex flex-col items-center ml-3 mr-3"><p className="font-black text-[var(--elementcolor)] text-[35px] ">{Object.entries(data1)[0][1]} </p><p className="font-bold text-[20px]">Ferreiros</p></div>
              <div className="flex flex-col items-center ml-3 mr-3"><p className="font-black text-[var(--elementcolor)] text-[35px]">{Object.entries(data1)[1][1]} </p><p className="font-bold text-[20px]">Pedidos</p></div>
              <div className="flex flex-col items-center ml-3 mr-3"><p className="font-black text-[var(--elementcolor)] text-[35px]">{Object.entries(data1)[2][1]} </p><p className="font-bold text-[20px]">Clientes</p></div>
              <div className="flex flex-col items-center ml-3 mr-3"><p className="font-black text-[var(--elementcolor)] text-[35px]">{Object.entries(data1)[3][1]} </p><p className="font-bold text-[20px]">Vendas</p></div>
            </div>}
            <Image
              src="/forge.png"
              height={120}
              width={120}
              alt="forja"
              className="flex self-center justify-end ml-auto mr-10"
              />
          </div>

          <div className="flex flex-row h-[100%] ">
            {Object.entries(data2)[0] != undefined && <div className="shadow-lg shadow-gray-500/50 p-8 flex flex-col items-center h-[100%] w-[100%] ml-[40px] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px]">
              <strong className="text-[35px] text-[var(--elementcolor)] ">Ferreiro em Destaque</strong>
              <Image
              src="/person.png"
              height={120}
              width={120}
              alt="person"
              className="mt-10"
              />
              <strong className="text-[25px] text-[var(--elementcolor)] mt-10">{Object.entries(data2)[0][1]}</strong>
              <p className="text-[20px] mt-4">Especializado em <strong>{Object.entries(data2)[1][1]}</strong></p>
              <p className="text-[20px] mt-4">Trabalha na Loja <strong>{Object.entries(data2)[2][1]}</strong></p>
              <p className="text-[20px] mt-4"><strong>{Object.entries(data2)[3][1]}</strong> Pedidos Realizados</p>
            </div>}

            {Object.entries(data3)[0] != undefined && <div className="shadow-lg shadow-gray-500/50 p-8 flex flex-col items-center h-[100%] w-[100%] ml-[40px] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px]">
              <strong className="text-[35px] text-[var(--elementcolor)]">Item mais Vendido</strong>
              <Image
              src="/sword.png"
              height={120}
              width={120}
              alt="sword"
              className="mt-10"
              />
              <strong className="text-[25px] text-[var(--elementcolor)] mt-10">{Object.entries(data3)[0][1]}</strong>
              <p className="text-[20px] mt-4">Tipo <strong>{Object.entries(data2)[1][1]}</strong></p>
              <p className="text-[20px] mt-4">Forjado na <strong>{Object.entries(data2)[2][1]}</strong></p>
              <p className="text-[20px] mt-4"><strong>{Object.entries(data2)[3][1]}</strong> {Object.entries(data3)[0][1]} vendidas </p>
            </div>}
          </div>
        
        </div>
      </div> 
    </div>
  );
}
