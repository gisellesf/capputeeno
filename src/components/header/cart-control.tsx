'use client'

// ** React Imports
import React from 'react'

// ** Styled Components Imports
import styled from 'styled-components';

// ** Imports Components
import { ShoppingBag } from './svg/shopping-bag'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`;

const ContainerCart = styled.div`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`;

export default function CartControl() {
   const { value } = useLocalStorage('cartItems', [])

  return (
    <ContainerCart>
      <ShoppingBag />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </ContainerCart>
  )
}
