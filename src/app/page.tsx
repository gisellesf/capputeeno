import styles from './page.module.css'
import FilterBar from '@/components/filter-bar/filter-bar'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar/>
    </main>
  )
}
