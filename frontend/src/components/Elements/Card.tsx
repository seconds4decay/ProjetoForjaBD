import Link from 'next/link';

interface CardProps {
    href: string;
    children: React.ReactNode;
}

export default function Card(props: CardProps ) {

    return (
        <Link href={props.href}>
            <div className="group flex border rounded-(--borderradius) justify-center items-center h-40 w-55 border-(--bordercolor) ms-4 
            hover:bg-(--elementcolor) text-200 transform hover:scale-110 transition delay-40 hover:text-white " >
                {props.children}
            </div>
        </Link>
    );
}