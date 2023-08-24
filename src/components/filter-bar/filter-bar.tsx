'use client'

// ** Import React
import React from 'react'

// ** Import Styled Componets
import styled from 'styled-components';

// ** Imports Components
import  { FilterByType } from './filter-by-type'

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`;

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  )
}
