import React from "react";

const Table = ({rows}) => {
  return <div>
    <div className="header">
      <div className="status" > Статус </div>
      <div className="coment" > Коментарий </div>
      <div className="time" > Время </div>
    </div>

    <div className="content" >
      {rows.map(row => <div className={`row row-${row.type}`} >
        <div className="status" > {row.status} </div>
        <div className="coment" > {row.comment} </div>
        <div className="time" > {row.time} </div>
      </div>)}
    </div>
  </div>
}

export default Table;