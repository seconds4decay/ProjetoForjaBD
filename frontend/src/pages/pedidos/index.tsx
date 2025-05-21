import ModelPage from "@/components/Templates/ModelPage";
import { Pedido } from "@/models/Pedido";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState<any[]>([]);
    const dashboardRoute = "http://localhost:8080/pedido/qntPedidos";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dashboardRoute);
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
        };

        fetchData();
    }, []);

    const dashboard = (
        <div>
           {Object.entries(data)[0] != undefined && 
           <div className="flex flex-col ml-[2%] gap-8">
                <div className="flex items-center justify-center gap-7">
                    <div className="flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Pedidos Em Produção</strong>
                        <strong className="text-[120px] font-bold text-[#e50000] mt-10">{Object.entries(data)[0][1]}</strong>
                    </div>

                    <div className="flex flex-col items-center  w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Pedidos Produzidos</strong>
                        <strong className="text-[120px] font-bold text-[#FFBF00] mt-10">{Object.entries(data)[1][1]}</strong>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-7">
                    <div className="flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Pedidos Entregados</strong>
                        <strong className="text-[120px] font-bold text-[#51cc00] mt-10">{Object.entries(data)[2][1]}</strong>
                    </div>

                    <div className="flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Pedidos Cancelados</strong>
                        <strong className="text-[120px] font-bold text-[#2e2e2e] mt-10">{Object.entries(data)[3][1]}</strong>
                    </div>
                </div>
            </div>}
        </div>
    )

    return (
        <ModelPage title="Pedidos" href="pedidos" model={Pedido} dashboard={dashboard}  />
    );
}