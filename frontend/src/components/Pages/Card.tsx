import styles from '@/styles/card.module.css';

export default function Card(Props: any) {
     return (
          <div className={styles.card}>
               <p>{Props.children}</p>
          </div>
     )
}