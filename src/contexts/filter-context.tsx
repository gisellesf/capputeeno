'use client'

// ** Imports React
import { useState, createContext } from "react";

// ** Imports Interface
import { FilterProviderProps } from "@/interfaces/Filter-Type-Props";

export enum FilterTypes {
  'ALL',
  'SHIRT',
  'MUG'
}

export enum PriorityTypes{
  'POPULARITY',
  'NEWS',
  'LOWEST_PRICE',
  'BIGGEST_PRICE'
}

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value: FilterTypes) => { },
  setPriority: (value: PriorityTypes) => { },
})


export function FilterContextProvider({ children }: FilterProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.ALL)
  const [priority, setPriority] = useState(PriorityTypes.NEWS)

  return (
    <FilterContext.Provider value={{ search, page, type, setSearch, setPage, setType, priority, setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}
