import ModelPage from "@/components/Templates/ModelPage"
import { Venda } from "@/models/Venda"
import { useEffect, useState } from "react"
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, ArcElement, Tooltip, Legend, LineElement, PointElement, TimeScale, Title, CategoryScale } from 'chart.js'
import 'chartjs-adapter-date-fns';

async function getModelAll(route: string) {
    const response = await fetch(`http://localhost:8080/${route}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
    
}

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [data2, setData2] = useState<any[]>([])
    const [data3, setData3] = useState<any[]>([])
    const [data4, setData4] = useState<any[]>([])

    const dashboardRoute1 = "http://localhost:8080/venda/qntTotalVendas"
    const dashboardRoute2 = "http://localhost:8080/venda/tipoItemLucro"
    const dashboardRoute3 = "http://localhost:8080/venda/clientesMaisCompradores"

    const graficoCores = [
        '#4CAF50', // Verde
        '#2196F3', // Azul
        '#FF9800', // Laranja
        '#F44336', // Vermelho
        '#9C27B0', // Roxo
        '#00BCD4', // Ciano
        '#FFC107', // Amarelo
    ];

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    ChartJS.register(ArcElement, LineElement, LinearScale, PointElement, TimeScale, CategoryScale, Title, Tooltip, Legend);

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

            const response4 = await getModelAll("venda");
            const responseData4 = await response4.json();
            setData4(responseData4);
        }

        fetchData()
    }, [])

    const doughnutChart1 = () => {
        const dataset = {
            labels: ['Armas', 'Armaduras'],
            datasets: [
                {
                    label: 'Total Arrecadado por Tipo de Item',
                    data: [
                        Object.entries(data2)[0] ? Object.entries(data2)[0][1] : 0,
                        Object.entries(data2)[1] ? Object.entries(data2)[1][1] : 0,
                    ],
                    backgroundColor: graficoCores,
                },
            ],
        }
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Total Arrecadado por Tipo de Item',
                },
            },
        }
        return <Doughnut data={dataset} options={options} />

    }

    const doughnutChart2 = () => {
        // clientes mais compradores
        const dataset = {
            labels: data3.map((item: any) => item.nome),
            datasets: [
                {
                    label: 'Clientes mais Compradores',
                    data: data3.map((item: any) => item.qntVendas),
                    backgroundColor: graficoCores,
                },
            ],
        }

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Clientes mais Compradores',
                },
            },
        }

        return <Doughnut data={dataset} options={options} />

    }

    const lineChart = () => {
        const dataset = {
            labels: [], // será ignorado, pois usaremos escala de tempo no eixo X
            datasets: [
            {
                label: 'Valor da Venda',
                data: [

                    ...data4.map((item: any) => ({
                        x: item.dataTransacao, 
                        y: item.item.valor, 
                    })).sort((a: any, b: any) => new Date(a.x).getTime() - new Date(b.x).getTime()),
                ],
                fill: false,
                borderColor: '#4F46E5',
                backgroundColor: '#4F46E5',
                tension: 0.3,
            },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
            title: {
                display: false,
                text: 'Vendas ao Longo dos Meses',
            },
            legend: {
                display: true,
                position: 'top',
            },
            },
            scales: {
            x: {
                type: 'time',
                time: {
                unit: 'month',
                displayFormats: {
                    month: 'MMM yyyy', // Ex: Jan 2024
                },
                },
                title: {
                display: true,
                text: 'Mês',
                },
                ticks: {
                maxRotation: 0,
                autoSkip: true,
                },
            },
            y: {
                beginAtZero: true,
                title: {
                display: true,
                text: 'Total de Vendas',
                },
            },
            },
        };

        return <Line data={dataset} options={options} />;
    };
    

    const dashboard = (
        <div>
           <div className="flex flex-col ml-[2%] gap-7">
                {Object.entries(data1)[0] != undefined && <div className="flex items-center justify-center gap-7">
                    <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-start w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Estátisticas de Vendas no mês de {meses.at(new Date().getMonth())}</strong>
                        <p className="text-[45px] mt-3 font-sans">Quantidade de Vendas: <strong className="text-[70px] font-bold text-[#51cc00] mt-10"> {Object.entries(data1)[0][1]}</strong></p>
                        <p className="text-[45px] mt-3 font-sans">Rendimento Total: <strong className="text-[70px] font-bold text-[#51cc00] mt-10"> R${Object.entries(data1)[1][1]}.00</strong></p>
                    </div>

                    <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center  w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Vendas ao Longo dos Meses</strong>
                        {lineChart()}
                        
                    </div>
                </div>}
                 <div className="flex items-center justify-center gap-7">
                     <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Clientes mais Compradores</strong>
                        {data3 != undefined && <div className="h-[40vh] w-[40vh]"> {doughnutChart2()}</div>}
                        
                    </div>

                    <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Total Arrecadado por Tipo de Item</strong>
                        <div className="h-[40vh] w-[40vh]">{doughnutChart1()}</div>
                    </div>

                </div>
            </div>
        </div>
    )

    return (
        <ModelPage title="Vendas" href="vendas" model={Venda} dashboard={dashboard} />
    )
}