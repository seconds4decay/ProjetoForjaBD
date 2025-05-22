import ModelPage from "@/components/Templates/ModelPage";
import { Loja } from "@/models/Loja";
import { useEffect, useState } from "react";

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [storeName1, setStoreName1] = useState("")

    const [data2, setData2] = useState<any[]>([])
    const [storeName2, setStoreName2] = useState("")

    const dashboardRoute1 = "http://localhost:8080/loja/rentabilidadeLojaPorNome/"
    const dashboardRoute2 = "http://localhost:8080/loja/vendasRecentesPorLoja/"

    
    useEffect(() => {
        const fetchData = async (name: string) => {
            console.log(name)
            const response1 = await fetch(`${dashboardRoute1}${name}`)
            const responseData1 = await response1.json()
            console.log(responseData1)
            if(responseData1.status !== 404) {
                setData1(responseData1)
            }
        }

        fetchData(storeName1)
    }, [storeName1])

    useEffect(() => {
        const fetchData = async (name: string) => {
            console.log(name)
            const response2 = await fetch(`${dashboardRoute2}${name}`)
            const responseData2 = await response2.json()
            console.log(responseData2)
            if(responseData2.status !== 404) {
                setData2(responseData2)
            }
        }

        fetchData(storeName2)
    }, [storeName2])
    

    const dashboard = (
        <div>
            <div className="flex flex-col ml-[2%] gap-7">
                <div className="flex items-center justify-center gap-7">

                    <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Rentabilidade</strong>
                        <div className="flex flex-col self-start gap-3">
                            <label htmlFor="storeName" className="text-[15px] mt-3 font-sans">Nome da Loja</label>
                            <input
                                type="text"
                                id="storeName"
                                className="p-2 border-[1px] border-gray-300 rounded"
                                value={storeName1}
                                onChange={(e) => setStoreName1(e.target.value)} // Atualiza o nome da loja
                                placeholder="Digite o nome da loja"
                            />
                        </div>
                        {Object.entries(data1)[0] != undefined && data1.status != 500 && <div className="flex flex-col items-center">
                            <label htmlFor="storeName" className="text-[15px] mt-3 font-sans">{Object.entries(data1)[0][1]}</label>
                            <strong className="text-[70px] font-bold text-[#51cc00]">R${Object.entries(data1)[1][1]}.00</strong>
                        </div>}
                    </div>
                    <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Vendas Recentes</strong>
                        <div className="flex flex-col self-start gap-3">
                            <label htmlFor="storeName" className="text-[15px] mt-3 font-sans">Nome da Loja</label>
                            <input
                                type="text"
                                id="storeName"
                                className="p-2 border-[1px] mb-3 border-gray-300 rounded"
                                value={storeName2}
                                onChange={(e) => setStoreName2(e.target.value)} // Atualiza o nome da loja
                                placeholder="Digite o nome da loja"
                            />
                        </div>
                        {data2 != undefined && data2.status != 500 && <table className="w-full table-auto border-collapse overflow-y-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-300"></th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Nome</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Data da Transação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.nome}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">{item.dataTransacao}</td>
                                </tr>))}
                        </tbody>
                    </table>}
                    </div>
                </div>
                
            </div>
        </div>
    )


    return (
        <ModelPage title="Lojas" href="lojas" model={Loja} dashboard={dashboard} />
    );
}