import { MenuItem } from "./MenuItem"

export const Menu = ({name}) => {
    return (
        <>
            <nav className='navbar navbar-default' role='navigation'>
                <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='/'><span></span></a>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#main-navbar'>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    </button>
                </div>
                <div className='navbar-collapse collapse' id='main-navbar'>
                    <ul className='nav navbar-nav navbar-right'>
                    <MenuItem active={name === 'stock'} url='/stock'
                        title='trigger a RuntimeException to see how it is handled'>
                        <span className='glyphicon glyphicon-barcode' aria-hidden='true'></span>&nbsp;
                                <span>Stock</span>
                    </MenuItem>
                    <MenuItem active={name === 'products'} url='/products'
                        title='trigger a RuntimeException to see how it is handled'>
                        <span className='glyphicon glyphicon-th-list' aria-hidden='true'></span>&nbsp;
                                <span>Products</span>
                    </MenuItem>

                    <MenuItem active={name === 'error'} url='/error'
                        title='trigger a RuntimeException to see how it is handled'>
                        <span className='glyphicon glyphicon-warning-sign' aria-hidden='true'></span>&nbsp;
                                <span>Error</span>
                    </MenuItem>
                    </ul>
                </div>
                </div>
            </nav>

        </>
    )
}