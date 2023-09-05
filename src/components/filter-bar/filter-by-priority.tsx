'use client'
// ** Imports react
import React, { useState } from 'react'

// ** Imports Styled Componets
import { styled } from 'styled-components'

// ** Imports Components
import { Arrow } from '@/svg/Arrow'
import { PriorityTypes } from '@/contexts/Filter-Context';

// ** Imports Hooks
import { useFilter } from '@/hooks/useFilter';

const FilterContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  button {
    border: none; // Adicione o ponto e vírgula aqui
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 176px;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px 0px #0000001A;
  padding: 12px 16px; // Adicione dois pontos (:) aqui
  list-styled: none;
  z-index: 999;

  top: 100%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export default function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);

  const { setPriority } = useFilter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handlePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }


  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <Arrow />
      </button>
      {isOpen &&
      <PriorityFilter>
        <li onClick={() => handlePriority(PriorityTypes.NEWS)}>Novidades</li>
        <li onClick={() => handlePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handlePriority(PriorityTypes.LOWEST_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handlePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
      </PriorityFilter>
      }
    </FilterContainer>
  )
}
