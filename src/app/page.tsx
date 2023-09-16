import { InputBox } from '@/components/input-box'
import Image from 'next/image'
import { HiOutlineKey, HiOutlineMail } from "react-icons/hi";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/bg6.png')] bg-center bg-cover">
      <div className="flex flex-col w-[450px] h-[480px] items-center justify-center relative bg-transparent border-2 rounded-3xl backdrop-blur-lg backdrop-brightness-[.6] py-6" >
        <h2 className='text-3xl text-slate-50 text-center font-bold'>Login</h2>
        <InputBox Icon={HiOutlineMail} label="Email" type="email" />
        <InputBox Icon={HiOutlineKey} label="Password" type="password" />
        <div className='-mt-5 mb-9 flex justify-center'>
          <label className='text-slate-50'><input className="mr-1 border-none" type="checkbox" name="" id="" />Remember me&nbsp;
            <a href="#" className='text-slate-50 font-bold decoration-transparent decoration-2 hover:decoration-teal-800'>Forget password?</a>
          </label>
        </div>
        <button className='w-60 h-10 rounded-[40px] mx-6 border-none outline-none font-bold bg-slate-50 hover:bg-orange-700 hover:text-slate-50 transition-all'>Login</button>
        <div className='text-slate-50 mt-2'>
          <p>Don't have an account? <a className="font-bold" href="#">Register</a></p>
        </div>
      </div>
    </main>
  )
}
