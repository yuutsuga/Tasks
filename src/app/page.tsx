"use client";

import { Main, Container, Title, Tasks } from './page.style';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Container>
        <Title>My Tasks</Title>
        <Link href={"/calculator"}><Tasks>Calculator</Tasks></Link>
        <Link href={"/stopwatch"}><Tasks>Stopwatch</Tasks></Link>
      </Container>
    </Main>
  )
}
