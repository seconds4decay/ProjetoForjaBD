import ModelPage from "@/components/Templates/ModelPage";
import { Pedido } from "@/models/Pedido";
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

export default function Home() {
    const [data, setData] = useState<any[]>([]);
    const dashboardRoute = "http://localhost:8080/pedido/qntPedidos";

    const graficoCores = [
        '#4CAF50', // Verde
        '#2196F3', // Azul
        '#FF9800', // Laranja
        '#F44336', // Vermelho
        '#9C27B0', // Roxo
        '#00BCD4', // Ciano
        '#FFC107', // Amarelo
    ];

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dashboardRoute);
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
        };

        fetchData();
    }, []);

    const barChart = () => {
        const dataset = {
            labels: ['Em Produção', 'Produzidos', 'Entregados', 'Cancelados'],
            datasets: [
            {
                label: 'Pedidos',
                data: [
                    Object.entries(data)[0] ? Object.entries(data)[0][1] : 0,
                    Object.entries(data)[1] ? Object.entries(data)[1][1] : 0,
                    Object.entries(data)[2] ? Object.entries(data)[2][1] : 0,
                    Object.entries(data)[3] ? Object.entries(data)[3][1] : 0,
                ],
                backgroundColor: graficoCores,
            },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
                display: false
            },
            title: {
                display: false,
                text: 'Pedidos',
            },
            },
        };

        return <Bar data={dataset} options={options} />;
    };
    const dashboard = (
        <div>
           {Object.entries(data)[0] != undefined && 
           <div className="flex flex-col ml-[2%] gap-8">
                <div className="flex items-center justify-center gap-7">
                    <div className="shadow-lg shadow-gray-500/50 flex flex-col items-center w-[100%] rounded-[var(--borderradius)] bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] p-5">
                        <strong className="text-[15px] self-start font-sans">Pedidos</strong>
                        <div className="w-[80vh] h-[100%] items-stretch">{ barChart() }</div>
                    </div>
                </div>
            </div>}
        </div>
    )

    return (
        <ModelPage title="Pedidos" href="pedidos" model={Pedido} dashboard={dashboard}  />
    );
}