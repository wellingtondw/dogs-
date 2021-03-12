import Footer from "../../components/Footer"
import Header from "../../components/Header"

type BaseProps = {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Base
