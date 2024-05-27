import React, { useState } from "react";

import styled from 'styled-components';

export default function MemberRow ({ id, age, name, activities, rating }) {
  
  const [isEdit, setIsEdit] = useState(false)

  const Cell = styled.td`
  padding: 0.5rem;
  text-align: center;
  `;
  
  return (
    <tr key={id}>
      { isEdit && 
        (
          <>
          </>
        )
      }
      { !isEdit && 
        <>
          <Cell>{name}</Cell>
          <Cell>{age}</Cell>
          <Cell>{rating}</Cell>
          <Cell>
            {activities.map((activity, i) => (
              <div key={i}>{activity}</div>
            ))}
          </Cell>
        </>

      }

  </tr>
  )
}