import ModelPage from "@/components/Templates/ModelPage";
import { Loja } from "@/models/Loja";
import { useEffect, useState } from "react";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, ArcElement, Tooltip, Legend, LineElement, PointElement, TimeScale, Title, CategoryScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [storeName1, setStoreName1] = useState("")

    const [data2, setData2] = useState<any[]>([])
    const [storeName2, setStoreName2] = useState("")

    const dashboardRoute1 = "http://localhost:8080/loja/rentabilidadeLojaPorNome/"
    const dashboardRoute2 = "http://localhost:8080/loja/vendasRecentesPorLoja/"

    const dashboardRoute3 = "http://localhost:8080/loja/rentabilidadeLoja"
    const dashboardRoute4 = "http://localhost:8080/loja/vendasRecentes"

    const graficoCores = [
        '#4CAF50', // Verde
        '#2196F3', // Azul
        '#FF9800', // Laranja
        '#F44336', // Vermelho
        '#9C27B0', // Roxo
        '#00BCD4', // Ciano
        '#FFC107', // Amarelo
    ];

    ChartJS.register(ArcElement, LineElement, BarElement, LinearScale, PointElement, TimeScale, CategoryScale, Title, Tooltip, Legend);
    
    useEffect(() => {
        const fetchData = async (name: string) => {
            
            console.log(name)
            const response1 = await fetch(`${dashboardRoute1}${name}`)
            const responseData1 = await response1.json()
            console.log(responseData1)
            if(responseData1[0] !== undefined) {
                setData1(responseData1)
            } else {
                console.log(name)
                const response1 = await fetch(dashboardRoute3)
                const responseData1 = await response1.json()
                console.log(responseData1)
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
                if(responseData2[0] !== undefined) {
                    setData2(responseData2)
                } else {
                    console.log("vazio")
                    const response2 = await fetch(dashboardRoute4)
                    const responseData2 = await response2.json()
                    console.log(responseData2)
                    setData2(responseData2)
                }
           
            }

        fetchData(storeName2)
    }, [storeName2])

    const lineChart1 = () => {
        const dataset = {
            labels: [], // será ignorado, pois usaremos escala de tempo no eixo X
            datasets: [
            {
                label: 'Valor da Venda',
                data: [
                    ...data2.map((item: any) => ({
                        x: item.dataTransacao, 
                        y: item.valor, 
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
                text: 'Vendas Recentes',
            },
            legend: {
                display: false,
                position: 'top',
            },
            },
            scales: {
            x: {
                type: 'time',
                time: {
                unit: 'month',
                displayFormats: {
                    day: 'MMM yyyy', // Ex: Jan 2024
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

    const barChart1 = () => {
        const dataset = {
            // ferreiros mais rentaveis 
            labels: data1.map((item: any) => item.nome),
            datasets: [
                {
                    label: 'Rentabilidade Total',
                    data: data1.map((item: any) => item.totalRentabilidade),
                    backgroundColor: graficoCores,
                },
            ],

        }
        const options = {

            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false
                },
                title: {
                    display: false,
                    text: 'Total Arrecadado por Tipo de Item',
                },
            },
        }
        return <Bar data={dataset} options={options} />

    }
    

    const dashboard = (
        <div>
            <div className="flex flex-col ml-[2%] gap-7">
                <div className="flex items-center justify-center gap-7">

                    <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Rentabilidade</strong>
                        <div className="flex flex-col self-start gap-3">
                            <input
                                type="text"
                                id="storeName"
                                className="p-2 border-[1px] mt-4 mb-4 border-gray-300 rounded-full"
                                value={storeName1}
                                onChange={(e) => setStoreName1(e.target.value)} // Atualiza o nome da loja
                                placeholder="Digite o nome da loja"
                            />
                        </div>
                        {Object.entries(data1)[0] != undefined && barChart1()}
                    </div>
                    <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Vendas Recentes</strong>
                        <div className="flex flex-col self-start gap-3">
                            <input
                                type="text"
                                id="storeName"
                                className="p-2 border-[1px] mt-4 mb-4 border-gray-300 rounded-full"
                                value={storeName2}
                                onChange={(e) => setStoreName2(e.target.value)} // Atualiza o nome da loja
                                placeholder="Digite o nome da loja"
                            />
                        </div>
                        {data2 != undefined && lineChart1()}
                    </div>
                </div>
                
            </div>
        </div>
    )


    return (
        <ModelPage title="Lojas" href="lojas" model={Loja} dashboard={dashboard} />
    );
}