import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import BackButton from './BackButton';

export default function Sidebar() {

    return (
        <div className="sidebar border border-(--bordercolor) rounded-(--borderradius) bg-(--background2) h-[80vh] w-100 min-w-100 max-w-100 p-5">
            <h1><Link href="/">
                <div style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}>
                <Image src="/images/icon.png" alt="Logo" width={100} height={100} />Forja APP
                </div>
                </Link>
            </h1>
            
            <ul>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">   
                    <a href="/" className='flex items-center gap-2 text-inherit'>
                        <Image src="/images/home.svg" alt="Home" width={24} height={24} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        <p>Home</p>
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/pedidos" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Pedidos
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/vendas" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Vendas
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/clientes" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Clientes
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/ferreiros" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Ferreiros
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/lojas" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Lojas
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/estoque" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Estoque
                    </a>
                </li>
                <li className="group rounded-(--borderradius) p-4 m-2 w-1/1 flex items-center gap-2 hover:bg-(--elementcolor) hover:text-white transform transition delay-40">
                    <a href="/historico" className='flex items-center gap-2 text-inherit'>
                        <Image src="/globe.svg" alt="Crud" width={20} height={20} className="filter brightness-0 transition duration-300 group-hover:invert-100"/>
                        Historico
                    </a>
                </li>
                
            </ul>
                
        </div>
    );
}