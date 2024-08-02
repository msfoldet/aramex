"use client"

import styles from './page.module.css'
import Image from 'next/image'
import main from "../../public/main.jpeg"
// import main1 from "../../public/main1.jpeg"
import main2 from "../../public/main2.png"
import main3 from "../../public/main3.jpg"
import main4 from "../../public/main4.jpg"
import main5 from "../../public/main5.jpg"
import main6 from "../../public/main6.png"
import main7 from "../../public/main7.png"
import main8 from "../../public/main8.jpg"



export default function Home() {


  return (
    
    <main className={styles.main}>
       <a href="/aram">اطلب الخدمة الان</a>
      <div>
      <Image src={main} style={{width:"100%"}}/>
      {/* <Image src={main1} width={370}/> */}
      <Image src={main2} style={{width:"100%"}}/>
      <Image src={main3} style={{width:"100%"}}/>
      <Image src={main4} style={{width:"100%"}}/>
      <Image src={main5} style={{width:"100%"}}/>
      <Image src={main6} style={{width:"100%"}}/>
      <Image src={main7} style={{width:"100%"}}/>
      <Image src={main8} style={{width:"100%"}}/>
      
      </div>
      
    </main>
  )
  
}


