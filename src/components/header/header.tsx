'use client'

// ** React Imports
import React from 'react'
import { Saira_Stencil_One } from 'next/font/google'

// ** Styled Components Imports
import { styled } from 'styled-components';

// ** Imports Components
import { PrimaryInputSearchIcon } from './Primary-Input';
import CartControl from './Cart-Control';

// ** Imports Interface
import { HeaderProps } from '@/interfaces/Header-Props';

const saira_stencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;


  > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={saira_stencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputSearchIcon      
          placeholder='Procurando por algo específico?'
          name='search'
        />
        <CartControl/>
      </div>
    </TagHeader>
  )
}

export default Header