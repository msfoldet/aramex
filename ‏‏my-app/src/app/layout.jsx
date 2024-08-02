import { Tajawal } from 'next/font/google'
import  './globals.css'
import Image from 'next/image'
import nav from "../../public/nav.png"
import foot from "../../public/footer.png"

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'ارامكس | الرئيسية  ',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <meta property="og:image" content="https://www.logisticsmanager.com/wp-content/uploads/2022/09/Aramex-2.jpg" />
      <body className={tajawal.className}>
      <Image src={nav} style={{width:"100%"}}/>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          
          {children}
      {/* </NumTrack.Provider> */}
      <Image src={foot} style={{width:"100%"}}/>
        
        
        </body>
    </html>
  )
}
