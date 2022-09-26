import React, { Component } from "react";
import Swal from "sweetalert2";

class R057_Sweetalert2Position extends Component {
  saveAlert = (flag, positionflag, e) => {
    Swal.fire({
      position: positionflag,
      icon: "success",
      title: flag + "됐습니다.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  render() {
    return (
      <>
        <h1>sweetAlert2</h1>
        <button onClick={(e) => this.saveAlert("저장", "center")}>저장</button>
        <button onClick={(e) => this.saveAlert("tnwjd", "bottom-end")}>
          수정
        </button>
      </>
    );
  }
}

export default R057_Sweetalert2Position;
