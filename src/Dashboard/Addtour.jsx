import React from 'react'

function Addtour() {
const [isCreate, setCreate] = useState(false);
const handleCreateClick = () => {
  setCreate((previsEditModal) => !previsEditModal);
};



  return (
    <div>
      {isCreate && <AddFormtours handleCreateClick={handleCreateClick} />}

      <div className="add">
        <button type="option" onClick={handleCreateClick}>
          Add Tours
        </button>
      </div>
    </div>
  );
}

export default Addtour