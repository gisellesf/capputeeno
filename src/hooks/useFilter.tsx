import { useContext } from 'react'
import { FilterContext } from '@/contexts/Filter-Context'

export function useFilter() {
  return useContext(FilterContext)
}
