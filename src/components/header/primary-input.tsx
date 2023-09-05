'use client'

// ** React Imports
import React, { InputHTMLAttributes } from 'react'

// ** Styled Components Imports
import { styled } from 'styled-components';

// ** Components Imports
import { SearchIcon } from '@/svg/Search-Icon';

export const PrimaryInput = styled.input`
  background-color: var(--bg-secundary);
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.a`
  width: 352px;
  position: relative;
  svg{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputPros extends InputHTMLAttributes<HTMLInputElement>{
}

export function PrimaryInputSearchIcon( props: InputPros ) {
  return(
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon/>
    </InputContainer>
  )
}
