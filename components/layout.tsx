import Head from "next/head"
import Header from "./header"



const Layout : React.FC<{pageName?: string}> = ({ children, pageName}) => {

  return (
    <main>
      <Head>
          <title>{pageName || "intimate protocols"} </title>
      </Head>
      <div className="stack stackSpacing:noGap fullBleed">
        <Header />
      {children}
      </div>
    </main>
  )
}

export default Layout