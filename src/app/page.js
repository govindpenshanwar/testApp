import Link from 'next/link'


export default function Home() {
  return (
    <>
    <div className='flex flex-col gap-8 text-center mt-20'>
    <h1>This is home Page</h1>
    <Link href={'login'}>Login</Link>
    <Link href={'signUp'}> SignUP</Link>
    </div>
    </>

  )
}
