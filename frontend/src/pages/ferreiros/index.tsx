import ModelPage from "@/components/Templates/ModelPage";
import { Ferreiro } from "@/models/Ferreiro";
import { useEffect, useState } from "react";
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

export default function Home() {
    const [data1, setData1] = useState<any[]>([])
    const [data2, setData2] = useState<any[]>([])
    const [data3, setData3] = useState<any[]>([])
    const [data4, setData4] = useState<any[]>([])
    
    const dashboardRoute1 = "http://localhost:8080/ferreiro/ferreirosMaisRequisitados"
    const dashboardRoute2 = "http://localhost:8080/ferreiro/ferreirosMaisRentaveis"
    const dashboardRoute3 = "http://localhost:8080/ferreiro/qntFerreirosEspecializados"
    const dashboardRoute4 = "http://localhost:8080/ferreiro/qntFerreirosPorLoja"

    const graficoCores = [
        '#4CAF50', // Verde
        '#2196F3', // Azul
        '#FF9800', // Laranja
        '#F44336', // Vermelho
        '#9C27B0', // Roxo
        '#00BCD4', // Ciano
        '#FFC107', // Amarelo
    ];

    

    ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, Tooltip, Legend)

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

    const doughnutChart1 = () => {
        const dataset = {
            // Ferreiros mais requisitados
            labels: data1.map((item:any) => item.ferreiroNome),
            datasets: [
                {
                    label: 'Total de Requisições',
                    data: data1.map(item => item.totalRequisicoes),
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
                    text: 'Ferreiros mais requisitados',
                },
            },
        }

        return <Doughnut data={dataset} options={options} />
    }

    const doughnutChart2 = () => {
        const dataset = {
            // Ferreiros mais rentaveis
            labels: data4.map((item:any) => item.lojaNome),
            datasets: [
                {
                    label: 'Lucro Total',
                    data: data4.map(item => item.totalFerreiros),
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
                    text: 'Ferreiros mais requisitados',
                },
            },
        }

        return <Doughnut data={dataset} options={options} />
    }

    const barChart1 = () => {
        const dataset = {
            // ferreiros mais rentaveis 
            labels: data2.map((item: any) => item.nome),
            datasets: [
                {
                    label: 'Total Arrecadado',
                    data: data2.map((item: any) => item.totalRequisicoes),
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

    const barChart2 = () => {
        const dataset = {
            // ferreiros mais rentaveis 
            labels: data3.map((item: any) => item.especializacao),
            datasets: [
                {
                    label: 'Total Arrecadado',
                    data: data3.map((item: any) => item.totalFerreiros),
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
        <div className="flex flex-col ml-[2%] gap-7">
            <div className="flex items-center justify-center gap-7">
                <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Ferreiros mais requisitados</strong>
                    {data1 != undefined && <div className="h-[40vh] w-[40vh]">{doughnutChart1()}</div>}
                </div>

                {data4 != undefined && <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Quantidade de Ferreiros por Loja</strong>
                    {data4 != undefined && <div className="items-center h-[40vh] w-[40vh]">{doughnutChart2()}</div>}
                </div>}
            </div>
            <div className="flex items-center justify-center gap-7">
                <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Ferreiros mais rentaveis</strong>
                    {data2 != undefined && <div className="h-[40vh] w-[60vh]">{barChart1()}</div>}
                </div>

                {data3 != undefined && <div className="shadow-lg shadow-gray-500/50 flex flex-col self-stretch items-center h-[100%] w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                    <strong className="text-[15px] self-start font-sans">Quantidade de Ferreiros por Especialização</strong>
                    {data3 != undefined && <div className="h-[40vh] w-[60vh]">{barChart2()}</div>}
                </div>}
            </div>
        </div>
    )

    return (
        <ModelPage title="Ferreiros" href="ferreiros" model={Ferreiro} dashboard={dashboard}/>
    );
}