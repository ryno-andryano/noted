import React from 'react';
import {MdArchive, MdDelete} from 'react-icons/md';

function NoteItem() {
  return (
    <div className="note-item">
      <h3 className="note-item__title">Functional Component</h3>
      <p className="note-item__body">
        Functional component merupakan React component yang dibuat menggunakan
        fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia
        harus mengembalikan React element dan dipanggil layaknya React
        component.
      </p>
      <div className="note-item__footer">
        <time className="note-item__date" dateTime="2022-04-14T04:27:34.572Z">
          14 April 2022
        </time>
        <div className="note-item__action">
          <button className="note-item__archive-button">
            <MdArchive size={22} />
          </button>
          <button className="note-item__delete-button">
            <MdDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

