import styles from '@/styles/sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="sidebar" style={{ backgroundColor: "#f0f0f0", borderRadius: "10px", height: "80vh", width: "30vh", padding: "20px", marginLeft: "20px" }}>
            <h1><Link href="/">
                <div style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}>
                <Image src="/images/icon.png" alt="Logo" width={100} height={100} />Forja APP
                </div>
                </Link>
            </h1>
            <ul>
                <li className={styles.card} style={{ display: "flex"}}><a href="/">
                    <Image src="/images/home.png" alt="Home" width={20} height={20} style={{ display: "flex"}} />
                    <p>Home</p>
                </a></li>
                <li className={styles.card}><a href="/crud">Cruds</a></li>
            </ul>
        </div>
    );
}