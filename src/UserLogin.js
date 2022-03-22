import react, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
  });
  const { username, email } = data;
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (isEdit) {
      const tempTableData = tableData.map((item, index) => {
        if (index === currentIndex) {
          return { ...item, ...data };
        } else {
          return item;
        }
      });
      console.log("tempTableDataF", tempTableData);
      setTableData(tempTableData);
      setData({
        username: "",
        email: "",
      });
      setIsEdit(false);
    } else {
      let emptyArr = [];
      emptyArr.push(data);
      setTableData([...tableData, ...emptyArr]);
      setData({
        username: "",
        email: "",
      });
    }
  };
  console.log("tableData", tableData);
  const deleteHandler = (event, selectedUser, index) => {
    event.preventDefault();
    // console.log("event",event);
    // console.log("selectedUser",selectedUser);
    let tempTaleData = tableData;

    // const index = tempTaleData.indexOf(selectedUser);
    // if(index > -1){
    tempTaleData.splice(index, 1);
    // }
    // console.log("tempTaleData",tempTaleData);
    // console.log("taleData",tableData);
    setTableData([...tempTaleData]);
  };

  const editHandler = (event, selectedUser, index) => {
    setIsEdit(true);
    event.preventDefault();
    // console.log("event",event);
    console.log("selectedUser", selectedUser);
    let tempTaleData = tableData;
    setData(selectedUser);
    setCurrentIndex(index);
    setCurrentUser(setCurrentUser);

    // const index = tempTaleData.indexOf(selectedUser);
    // if(index > -1){
    // tempTaleData.splice(index, 1);
    // // }
    // // console.log("tempTaleData",tempTaleData);
    // // console.log("taleData",tableData);
    // setTableData([...tempTaleData]);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter your name"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your password"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="submit"
            name={`${isEdit ? "Update" : "Save"}`}
            value={`${isEdit ? "Update" : "Save"}`}
            className="btn btn-primary"
          />
        </form>
      </center>
      <table className="table table-hover">
        <thead>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>Email</th>
          <th style={{ textAlign: "center" }}>Actions</th>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => {
              return (
                <tr>
                  <td style={{ textAlign: "center" }}>{item.username}</td>
                  <td style={{ textAlign: "center" }}>{item.email}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={(event) => deleteHandler(event, item, index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => editHandler(event, item, index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colspan="3" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default App;
