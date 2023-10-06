"use client";

import { Main, Container, Title } from './page.style';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Container>
        <Title>My Tasks</Title>
        <Link href={"/calculadora"}>Calculadora</Link>
      </Container>
    </Main>
  )
}
