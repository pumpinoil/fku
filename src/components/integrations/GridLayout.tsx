// src/components/GridLayout.tsx

import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const MyGridLayout: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key="a" className="bg-blue-500">A</div>
      <div key="b" className="bg-red-500">B</div>
      <div key="c" className="bg-green-500">C</div>
    </GridLayout>
  );
};

export default MyGridLayout;
