'use client';
import React from 'react';
import Bounded from '@/components/Bounded';
import NameAndDescription from '@/components/hero/NameAndDescription';
import AtomView from '@/components/hero/AtomView';

const Home: React.FC = () => {
  return (
    <Bounded className='grid min-h-[90vh] md:grid-cols-2 grid-cols-1 items-center justify-items-center'>
      <NameAndDescription />
      <AtomView />
    </Bounded>
  );
};

export default Home;
