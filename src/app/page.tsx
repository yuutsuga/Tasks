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
        <Link href={"/triangle-sizes"}><Tasks>Triangle Sizes</Tasks></Link>
        <Link href={"/table"}><Tasks>Table</Tasks></Link>
      </Container>
    </Main>
  )
}
