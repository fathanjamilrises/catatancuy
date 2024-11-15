import React, { useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { Link } from "react-router-dom";
import Password from "../../components/Input/Password/Index";
import { validateEmail } from "../../utilities/helper";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nama: name,
        email,
        password,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <div className="bg-base-200 min-h-screen flex justify-center items-center">
        <div className="card md:card-side bg-base-100 shadow-xl max-w-4xl w-full">
          <figure className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg"
              alt="Random illustration"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title text-2xl font-bold mb-1">Daftar</h2>
            <p className="text-sm text-gray-600 mb-5">
              Daftar Dulu Yuk Sebelum Lanjut
            </p>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  placeholder="Masukin Nama Kamu Disini"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  placeholder="Masukin Email Kamu Disini"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Password onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && (
                <p className="text-red-500 text-sm pb-1 mt-2">{error}</p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Daftar
                </button>
              </div>
            </form>
            <div className="divider">Atau</div>
            <div className="text-center">
              <p>Udah Punya Akun?</p>
              <Link to={"/login"} className="link link-hover link-primary">
                Langsung Login Aja Disini!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
