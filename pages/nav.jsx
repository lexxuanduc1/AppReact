'use client';
import './footer.css'
import { Dropdown, Navbar,Avatar } from 'flowbite-react';

export default function NavbarWithDropdown({islogin}) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="https://motgame.vn/stores/news_dataimages/motgamevn/062022/06/01/cosplay-ganyu-nu-sinh-de-dua-22-.7020.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">APPLICATION</span>
      </Navbar.Brand>
      
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Collapse style={{display: islogin ? 'none' : 'block'}}>
        <Navbar.Link  href='/login'>Login</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2"  style={{display: islogin ? 'block' : 'none'}}>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-an-anime-girl-in-a-beautiful-pose-with-beautiful-flowers-image_2698613.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">DucXuan</span>
            <span className="block truncate text-sm font-medium">lexuanduc147@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='/' onClick={()=>{
                            localStorage.setItem('login', false);
                        }}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}


