import styles from '@/styles/topbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Topbar() {
    const router = useRouter();

    return (
        <div className={styles.topbar}>
b 
            <div className={styles.topbarContainer}>
                <div>
                    <Link href="/"><img src="/logo.png" alt="Logo" /></Link>
                </div>
                <div>
                    <Link href="/"><h1>FORJA APP</h1></Link>
                </div>
                <div>
                    {<button onClick={() => router.back()}>Voltar</button>}
                </div>
            </div>

        </div>
    );
}