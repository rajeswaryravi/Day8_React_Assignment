import React, { useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
const List = ({ peoplelist }) => {
  const [data, setData] = useState(peoplelist)
  const deletePerson = (id) => {
    let newList = data.filter((people) => { return people.id !== id })
    setData(newList);
  }
  return (
    <>
      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", position: "relative" }}>
            <div>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
            <div>
              <button style={{ width: "30px", padding: "5px", fontSize: "14px", position: "absolute", bottom: "80px", right: "5px" }} onClick={() => { deletePerson(id) }} id={id}> <FaRegWindowClose /> </button>
            </div>
          </article>);
      })}
      <button onClick={() => setData([])}>clear all</button>
    </>);
};
export default List;