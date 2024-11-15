import React from 'react'
import Navbar from '../../components/Navbar/Index'
import { Link } from 'react-router-dom'
import Password from '../../components/Input/Password/Index'
import { useState } from 'react'
import { validateEmail } from '../../utilities/helper'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleLogin = async (e)=>{
        e.preventDefault();
        if(!validateEmail(email)){
            setError('Masukan Email Dengan Benar Yaa')
            return
        }
        if(!password){
            setError('Masukan Password Dengan Benar Yaa')
            return
        }
    }
  return (
    <>
    <Navbar />
    <div className='bg-base-200 min-h-screen flex justify-center items-center'>
    <div className="card md:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure className="md:w-1/2">
            <img src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg" alt="Random image" className="object-cover w-full h-full" />
        </figure>
        <div className="card-body md:w-1/2">
            <h2 className="card-title text-2xl font-bold mb-1">Login</h2>
            <p className='text-sm text-gray-600 mb-5'>Login Dulu Yuk Sebelum Lanjut</p>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="email" className="grow" placeholder="Masukin Email Disini Yaa" onChange={(e) => setEmail(e.target.value.trim)} />
                    </label>
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text" onChange={(e)=> setPassword(e.target.value)}>Password</span>
                    </label>
                    <Password/>
                </div>
                {error && <p className="text-red-500 text-sm pb-1 mt-2">{error}</p>}
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type='submit'>Login</button>
                </div>
            </form>
            <div className="divider">Atau</div>
            <div className="text-center">
                <p>Belum Punya Akun?</p>
                <Link to={'/sign-up'} className="link link-hover link-primary">Daftar Sekarang Yuk!</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login