import Image from 'next/image'
import styles from '../css/approach.module.css'
import CtaBtn from '@/app/components/CtaBtn'

const columns = [
  {
    id: 1,
    title: 'S/C Design Foundation',
    svg: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="210" viewBox="0 0 240 177" fill="none" opacity={0.3}>
          <path d="M119.569 0.5C152.559 0.500003 182.409 3.82025 203.997 9.17969C214.795 11.8604 223.498 15.044 229.489 18.5605C235.515 22.0974 238.639 25.8737 238.639 29.6846C238.638 33.4954 235.515 37.2709 229.489 40.8076C223.498 44.3242 214.795 47.5078 203.997 50.1885C182.409 55.5479 152.559 58.8682 119.569 58.8682C86.5795 58.8682 56.7296 55.5479 35.1416 50.1885C24.3437 47.5078 15.6407 44.3242 9.64941 40.8076C3.62379 37.2709 0.500173 33.4954 0.5 29.6846C0.5 25.8737 3.62362 22.0974 9.64941 18.5605C15.6407 15.044 24.3438 11.8603 35.1416 9.17969C56.7296 3.82025 86.5796 0.5 119.569 0.5Z" stroke="white"/>
          <path d="M119.569 44.8828C148.725 44.8828 175.102 48.2023 194.174 53.5586C203.713 56.2377 211.397 59.4181 216.685 62.9287C221.991 66.4521 224.768 70.2267 224.768 74.0674C224.767 77.908 221.991 81.6818 216.685 85.2051C211.397 88.7157 203.713 91.8961 194.174 94.5752C175.102 99.9315 148.725 103.251 119.569 103.251C90.414 103.251 64.0372 99.9314 44.9648 94.5752C35.4253 91.8961 27.7413 88.7157 22.4541 85.2051C17.1478 81.6818 14.3712 77.908 14.3711 74.0674C14.3711 70.2267 17.1477 66.4521 22.4541 62.9287C27.7413 59.4182 35.4254 56.2377 44.9648 53.5586C64.0372 48.2024 90.414 44.8828 119.569 44.8828Z" stroke="white"/>
          <path d="M119.289 90.3828C141.769 90.3828 162.099 93.6998 176.791 99.0469C184.139 101.721 190.05 104.894 194.115 108.392C198.182 111.891 200.352 115.669 200.352 119.567C200.351 123.465 198.182 127.243 194.115 130.742C190.05 134.24 184.139 137.413 176.791 140.087C162.099 145.434 141.769 148.751 119.289 148.751C96.8089 148.751 76.4782 145.434 61.7861 140.087C54.4383 137.413 48.5268 134.24 44.4619 130.742C40.3957 127.243 38.2267 123.465 38.2266 119.567C38.2266 115.669 40.3955 111.891 44.4619 108.392C48.5268 104.894 54.4382 101.721 61.7861 99.0469C76.4782 93.6998 96.8089 90.3828 119.289 90.3828Z" stroke="white"/>
          <path d="M119.294 140.883C131.502 140.883 142.532 142.925 150.49 146.208C154.471 147.85 157.659 149.792 159.845 151.924C162.028 154.053 163.182 156.341 163.182 158.692C163.182 161.044 162.028 163.332 159.845 165.462C157.659 167.593 154.471 169.536 150.49 171.178C142.532 174.461 131.502 176.503 119.294 176.503C107.086 176.503 96.0562 174.461 88.0977 171.178C84.1172 169.536 80.9286 167.593 78.7432 165.462C76.5594 163.332 75.4062 161.044 75.4062 158.692C75.4064 156.341 76.5596 154.053 78.7432 151.924C80.9286 149.792 84.1173 147.85 88.0977 146.208C96.0562 142.925 107.086 140.883 119.294 140.883Z" stroke="white"/>
        </svg>
      </>
    )
  },
  {
    id: 2,
    title: 'Design & Build a CubeSat',
    svg: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="197" height="219" viewBox="0 0 197 219" fill="none" opacity={0.3}>
        <path d="M196.377 66.2266V157.459L98.3525 202.959L0.995117 157.999L0.500977 66.2256L98.4385 20.458L196.377 66.2266Z" stroke="white"/>
        <path d="M196.377 46.3203V137.553L98.3525 183.053L0.995117 138.093L0.500977 46.3193L98.4385 0.551758L196.377 46.3203Z" stroke="white"/>
        <path d="M196.377 83.377V173.5L98.3525 218.451L0.995117 174.033L0.500977 83.377L98.4385 38.1602L196.377 83.377Z" stroke="white"/>
        </svg>
      </>
    )
  },
  {
    id: 1,
    title: 'Launch & Post Operations',
    svg: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="210" viewBox="0 0 186 210" fill="none" opacity={0.3}>
        <path d="M93 1L185 53.438V89.3752M93 1L59.572 20.0532M93 1V33.6604M185 158.314L93 209L62.4732 192.182M185 158.314V123.646M185 158.314L152.959 139.657M1 158.314V53.438L26.1439 39.1065M1 158.314L28.0781 142.547M1 158.314L31.9464 175.363M93 104.745L60.539 123.646M93 104.745V67.2814M93 104.745L120.917 121M26.1439 39.1065L28.0781 142.547M26.1439 39.1065L59.572 20.0532M28.0781 142.547L60.539 123.646M59.572 20.0532L60.539 123.646M93 33.6604L185 89.3752M93 33.6604V67.2814M185 89.3752V123.646M93 67.2814L185 123.646M31.9464 175.363L120.917 121M31.9464 175.363L62.4732 192.182M120.917 121L152.959 139.657M62.4732 192.182L152.959 139.657" stroke="white"/>
        </svg>
      </>
    )
  },
]

export default function Approach() {
  return (
    <section className={`${styles.approachWrapper}`}>
        <div className="container-main">
            <div className={`${styles.approachContent} flex justify-center`}>
                  <h2 className='heading-2 text-align-center heading-3-sm'>A structured three-phased approach ensures progressive learning</h2>
            </div>
            <div className={`${styles.gridWrapper} `}>
                {columns.map(col => (
                  <div key={col.id} className={`${styles.column} ${styles['column'+col.id]} flex flex-column justify-center items-center text-align-center`}>
                    <svg className={styles.topBroder} xmlns="http://www.w3.org/2000/svg" width="91" height="93" viewBox="0 0 91 93" fill="none"><path opacity="0.2" d="M80.0605 93L80.0606 11L0.000513003 11" stroke="white"></path><line x1="79.5586" y1="22" x2="79.5586" y2="-6.56872e-08" stroke="#4A4A4A"></line><line x1="69.1191" y1="10.499" x2="90.9989" y2="10.499" stroke="#4A4A4A"></line></svg>
                    {col.svg}
                    <h2 className='heading-7 text-5-sm'>{col.title}</h2>
                  </div>
                ))}
            </div>
            <div className={`${styles.flexCloumn} flex items-center`}>
                <div className={styles.imgWrapper}>
                    <Image
                    src={"/assets/flatstat.png"}
                    width={604}
                    height={420}
                    className={`${styles.img} desktop-only` }
                    />
                </div>
                <div className={`${styles.textWrapper} flex flex-column gap-20` }>
                    <h2 className="heading-4 heading-3-sm ">HEX20 FLATSAT - Testbed for satellite development & training</h2>
                    <Image
                    src={"/assets/flatstat.png"}
                    width={280}
                    height={195}
                    className='mobile-only'
                    />
                    <p className="text-1 text-1-sm">HEX20 has so far sold 8 units to customers HEX20 together with LASP at CU Boulder and NCU Taiwan are teaming up to launch an innovative hardware focused training program.</p>
                    <CtaBtn href="/flatsat" text="learn more" disabled /> 
                </div>
            </div>
            
        </div>
    </section>
  )
}
