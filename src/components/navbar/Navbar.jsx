import logo from '../../images/LogoBN.png'
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled.jsx'

export default function Navbar()
{
    return (
        <>
            <Nav>
                <InputSpace className="input-search-space">
                    <i className='bi bi-search'></i>
                    <input type="text" placeholder='Digite um título' />
                </InputSpace>
                <ImageLogo src={logo} alt="Logo Breaking news"/>
                <Button>Entrar</Button>
            </Nav>
        </>
    )
} 