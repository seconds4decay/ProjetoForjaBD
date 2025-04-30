import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="sidebar bg-[var(--background2)] border border-[var(--bordercolor)] rounded-[var(--borderradius)] h-[80vh] w-64 min-w-64 max-w-64 p-5 hidden md:flex flex-col overflow-auto ga">
            <h1 className="mb-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/icon.png" alt="Logo" width={50} height={50} />
                    <span className="text-xl font-bold">Forja APP</span>
                </Link>
            </h1>

            <ul className="flex flex-col gap-2">
                {[
                    { href: "/", label: "Home", icon: "/images/home.svg" },
                    { href: "/pedidos", label: "Pedidos", icon: "/icons/produtos.png" },
                    { href: "/vendas", label: "Vendas", icon: "/icons/vendas.png" },
                    { href: "/clientes", label: "Clientes", icon: "/icons/cliente.png" },
                    { href: "/ferreiros", label: "Ferreiros", icon: "/icons/cliente.png" },
                    { href: "/lojas", label: "Lojas", icon: "/icons/lojas.png" },
                    { href: "/estoque", label: "Estoque", icon: "/icons/estoque.png" },
                ].map(({ href, label, icon }) => (
                    <li key={href}>
                        <Link 
                            href={href}
                            className="group flex items-center gap-3 p-3 rounded-[var(--borderradius)] hover:bg-[var(--elementcolor)] hover:text-white transition-colors"
                        >
                            <Image 
                                src={icon} 
                                alt={label} 
                                width={24} 
                                height={24} 
                                className="filter brightness-0 transition duration-300 group-hover:invert"
                            />
                            <span className="text-base">{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
