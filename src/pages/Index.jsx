import { Menu } from "../components/Menu/Menu"

export const Page = ({children}) => {
    return (
        <div style={{display: "block"}}>
        <Menu name={"vets"} />
        <div className='container-fluid'>
          <div className='container xd-container'>
            {children}
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <img src='/images/spring-pivotal-logo.png' alt='Sponsored by Pivotal' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}