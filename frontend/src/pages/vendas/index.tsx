import ModelPage from "@/components/Templates/ModelPage"
import { Venda } from "@/models/Venda"
import { useEffect, useState } from "react"

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [data2, setData2] = useState<any[]>([])
    const [data3, setData3] = useState<any[]>([])

    const dashboardRoute1 = "http://localhost:8080/venda/qntTotalVendas"
    const dashboardRoute2 = "http://localhost:8080/venda/tipoItemLucro"
    const dashboardRoute3 = "http://localhost:8080/venda/clientesMaisCompradores"

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
        }

        fetchData()
    }, [])

    const dashboard = (
        <div>
           <div className="flex flex-col ml-[2%] gap-7">
                {Object.entries(data1)[0] != undefined && <div className="flex items-center justify-center gap-7">
                    <div className="flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Quantidade de Vendas no ultimo mês</strong>
                        <strong className="text-[70px] font-bold text-[#51cc00] mt-10">{Object.entries(data1)[0][1]}</strong>
                    </div>

                    <div className="flex flex-col items-center  w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Total Arrecadado no ultimo mês</strong>
                        <strong className="text-[70px] font-bold text-[#51cc00] mt-10">R${Object.entries(data1)[1][1]}.00</strong>
                    </div>
                </div>}
                 <div className="flex items-center justify-center gap-7">
                     <div className="flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Clientes mais Compradores</strong>
                        {data3 != undefined && <table className="w-full table-auto border-collapse overflow-y-auto">
                        <thead>
                            <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-300"></th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Nome</th>
                            <th className="px-4 py-2 border border-gray-300 text-left text-[15px] font-sans">Quantidade Total de Compras</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data3.map((item, index) => (
                            <tr
                                key={index}
                                className={`text-[15px] font-sans border border-gray-300 ${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                }`}
                            >
                                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.nome}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.qntVendas}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>}
                    </div>

                    {Object.entries(data2)[0] != undefined &&<div className="flex flex-col self-stretch items-stren h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Total Arrecadado por Tipo de Item</strong>
                        <p className="text-[35px] font-sans">Armas: <strong className="text-[35px] font-bold text-[#51cc00] mt-10">R${Object.entries(data2)[0][1]}.00</strong></p>
                        <p className="text-[35px] font-sans">Armaduras: <strong className="text-[35px] font-bold text-[#51cc00] mt-10">R${Object.entries(data2)[1][1]}.00</strong></p>
                    </div>}

                </div>
            </div>
        </div>
    )

    return (
        <ModelPage title="Vendas" href="vendas" model={Venda} dashboard={dashboard} />
    )
}