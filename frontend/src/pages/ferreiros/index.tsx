import ModelPage from "@/components/Templates/ModelPage";
import { Ferreiro } from "@/models/Ferreiro";
import { useEffect, useState } from "react";

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [data2, setData2] = useState<any[]>([])
    const [data3, setData3] = useState<any[]>([])
    const [data4, setData4] = useState<any[]>([])
    
    const dashboardRoute1 = "http://localhost:8080/ferreiro/ferreirosMaisRequisitados"
    const dashboardRoute2 = "http://localhost:8080/ferreiro/ferreirosMaisRentaveis"
    const dashboardRoute3 = "http://localhost:8080/ferreiro/qntFerreirosEspecializados"
    const dashboardRoute4 = "http://localhost:8080/ferreiro/qntFerreirosPorLoja"

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await fetch(dashboardRoute1)
            const responseData1 = await response1.json()
            console.log(responseData1)
            setData1(responseData1)

            const response2 = await fetch(dashboardRoute2)
            const responseData2 = await response2.json()
            console.log(responseData2)
            setData2(responseData2)

            const response3 = await fetch(dashboardRoute3)
            const responseData3 = await response3.json()
            console.log(responseData3)
            setData3(responseData3)

            const response4 = await fetch(dashboardRoute4)
            const responseData4 = await response4.json()
            console.log(responseData4)
            setData4(responseData4)
        }
        fetchData()
    }, [])

    const dashboard = (
        <div className="flex flex-col ml-[2%] gap-7">
            <div className="flex items-center justify-center gap-7">
                <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Ferreiros mais requisitados</strong>
                    {data1 != undefined && <table className="w-full table-auto border-collapse overflow-y-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-300"></th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Nome</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Loja</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Requisições</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data1.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.ferreiroNome}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.loja}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.totalRequisicoes}</td>
                                </tr>))}
                        </tbody>
                    </table>}
                </div>

                {data4 != undefined && <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-stren h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Quantidade de Ferreiros por Loja</strong>
                    {data4.map((item, index) => (
                        <p key={index} className="text-[35px] font-sans">{item.lojaNome}: <strong className="text-[35px] font-bold text-[#51cc00] mt-10">{item.totalFerreiros}</strong></p>
                    ))}
                </div>}
            </div>
            <div className="flex items-center justify-center gap-7">
                <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Ferreiros mais rentaveis</strong>
                    {data2 != undefined && <table className="w-full table-auto border-collapse overflow-y-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-300"></th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Nome</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Requisições</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.nome}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">R${item.totalRequisicoes}.00</td>
                                </tr>))}
                        </tbody>
                    </table>}
                </div>

                {data3 != undefined && <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-stren h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Quantidade de Ferreiros por Especialização</strong>
                    {data3.map((item, index) => (
                        <p key={index} className="text-[35px] font-sans">{item.especializacao}: <strong className="text-[35px] font-bold text-[#51cc00] mt-10">{item.totalFerreiros}</strong></p>
                    ))}
                </div>}
            </div>
        </div>
    )

    return (
        <ModelPage title="Ferreiros" href="ferreiros" model={Ferreiro} dashboard={dashboard}/>
    );
}