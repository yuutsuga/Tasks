"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Body, Cell, Button, Cells } from './table.style';

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
  const [numColumns, setnumColumns] = useState(1);
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

  const addLine = () => {
    setNumLine(numLine + 1);
  }

  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < numLine; i++) {
      const line = [];
      for (let j = 0; j < numColumns; j++) {
        line.push(
          <div key={`${i}-${j}`}>
            {`${i}-${j}` in imageStorage && (
              <Image src={imageStorage[`${i}-${j}`]} width={50} height={50} alt='cell-image'/>
            )}
            <Cell type="text" placeholder="Type your text here" />
            <a onClick={() => addImage(`${i}-${j}`)}>+</a>
          </div>
        );
      }
      cells.push(<div key={i}>{line}</div>);
    }

    return cells;
  };

  return (
    <Body>
      <Button onClick={() => setnumColumns(numColumns + 1)}>Add Column</Button>
      <Button onClick={addLine}>Add Line</Button>

        <Cells>
            {renderCells()}
        </Cells>
    </Body>
  );
};

export default Tabela;
