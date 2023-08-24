'use client'

// ** Import React
// import React from 'react'

// ** Import Styled Componets 
import styled from 'styled-components'
import { FilterType } from '@/contexts/filter-context';

// ** Import Interface
import { FilterByTypeProps } from '@/interfaces/filter-type-props'

// ** Import hooks
import { useFilter } from '@/hooks/useFilter';


const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style:none;
`

const FilterItem = styled.li<FilterByTypeProps>`
  font-family: inherit;
  font-size: 16px;
  font-weight: ${props => props.selected ? '600' : '400'};
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor:pointer;

  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
`

export function FilterByType() {

  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}>
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}>
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}>
        Canecas
      </FilterItem>
    </FilterList>
  )
}
