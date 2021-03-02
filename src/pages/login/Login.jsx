//imrs
import React, { useState } from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
import { Link, useHistory} from 'react-router-dom'
import Swal from "sweetalert2";

const Login = () => {
  // document.title = 'Login'
  //สร้างตัวแปรแบบ State ไว้รับค่าจากฟอร์ม
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //สร้างตัวแปลสำหรับเปลี่ยนหน้า
  let history = useHistory()
  // history.push('/backend/dashboard')

  // เช็คว่าถ้ามีการล๊อคอินแล้วให้ส่งไปหน้า Dashboard
  if(localStorage.getItem('fullname') != null) {
    //ส่งไปหน้า Backend / Dashboard
    console.log(localStorage.getItem('fullname'));
    history.push('/backend/dashboard')
  }

  // ฟังก์ชั่นการ Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // ลองดูข้อมูลที่ได้จาก state
    // console.log(username , password);

    if (username === "admin" && password === "1234") {
      // alert("Login success")
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          //ส่งไปหน้า Backend / Dashboard
          history.push('/backend/dashboard')
          //เก็บขื่อผู้ใช้ลง localstarage
          localStorage.setItem('fullname','สามิตร โกยม')
          console.log("I was closed by the timer");

          // ส่งไปหน้า Backend/ Dashboard
          window.location ='/backend/dashboard'
        }
      });
    } else {
      // alert("Login fail")
      Swal.fire({
        title: "มีข้อผิดพลาด!",
        text: "ข้อมูลเข้าระบบไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "ลองใหม่อีกครั้ง",
        allowOutsideClick: false,
        allowEscapeKey: true,
      });
    }
  };

  return (
    <AuthLayout title="เข้าสู่ระบบ | Login">
      <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>

        <div className="mb-3 row">
          <label htmlFor="username" className="col-md-4 col-form-label">
            ชื่อผู้ใช้
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="password" className="col-md-4 col-form-label">
            รหัสผ่าน
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="submit" className="col-md-4 col-form-label"></label>
          <div className="col-md-8 btn-action">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              id="submit"
              value="เข้าสู่ระบบ"
            />
          </div>
        </div>

        <div className="mb-2 row btn-action">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
            <Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link>
          </div>
        </div>

        <div className="mb-2 row btn-action">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
            <Link to="/register">ลงทะเบียน</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
