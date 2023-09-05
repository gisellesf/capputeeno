'use client'

// ** Import React
import React from 'react'

// ** Import Styled Componets
import { styled } from 'styled-components';

// ** Imports Components
import { FilterByType } from './Filter-By-Type';
import FilterByPriority from './Filter-By-Priority';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority/>
    </FilterContainer>
  )
}
