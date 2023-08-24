'use client'

// ** Imports React
import { useState, createContext } from "react";

// ** Imports Interface
import { FilterProviderProps } from "@/interfaces/filter-type-props";

export enum FilterType {
  'ALL',
  'SHIRT',
  'MUG'
}

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value: FilterType) => { },
})


export function FilterContextProvider({ children }: FilterProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL)

  return (
    <FilterContext.Provider value={{ search, page, type, setSearch, setPage, setType }}>
      {children}
    </FilterContext.Provider>
  )
}
