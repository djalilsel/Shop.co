
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#F0F0F0] sm:overflow-y-auto'>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
