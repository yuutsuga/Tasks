"use client";

import { Main, Container, Title, Tasks } from './page.style';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Container>
        <Title>My Tasks</Title>
        <Link href={"/calculadora"}><Tasks>Calculadora</Tasks></Link>
      </Container>
    </Main>
  )
}
