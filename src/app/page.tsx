import styles from './page.module.css'
import FilterBar from '@/components/filter-bar/Filter-Bar'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar/>
    </main>
  )
}
