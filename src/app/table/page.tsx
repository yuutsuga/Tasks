"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Body, Cell, Button, Cells, Line, Buttons } from './table.style';

async function getBase64(file: File): Promise<string> {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
  })
}

const Tabela = () => {
  const [numColumns, setNumColumns] = useState(1);
  const [numLine, setNumLine] = useState(1);
  const [imageStorage, setImageStorage] = useState<Record<string, string>>({});

  const addImage = (key: string) => {
    const temporaryInput = document.createElement('input');
    temporaryInput.type = 'file';
    temporaryInput.multiple = false;

    temporaryInput.onchange = async () => {
      if(!temporaryInput.files || temporaryInput.files.length < 1)
        return;

      setImageStorage({
        ...imageStorage,
        [key]: await getBase64(temporaryInput.files[0])
      });
    };

    temporaryInput.click();
  };

  return (
    <Body>
      <Buttons>
        <div>
          <Button onClick={() => setNumColumns(numColumns + 1)}>Add Column</Button>
          <Button onClick={() => numColumns > 1 && setNumColumns(numColumns - 1)}>Remove Column</Button>
        </div>
        <div>
          <Button onClick={() => setNumLine(numLine + 1)}>Add Line</Button>
          <Button onClick={() => numLine > 1 && setNumLine(numLine - 1)}>Remove Line</Button>
        </div>
      </Buttons>

        <Cells>
            {Array.from(Array(numColumns).keys()).map((i: number) => (
              <Line key={i}>
                {Array.from(Array(numLine).keys()).map((j: number) => (
                  <Cell key={`${i}-${j}`} />
                  ))}
              </Line>
            ))}
        </Cells>
    </Body>
  );
};

export default Tabela;
