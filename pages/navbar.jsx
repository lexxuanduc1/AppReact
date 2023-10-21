'use client';
import {modules} from'../data/modules.ts'
import './footer.css'
import { Sidebar } from 'flowbite-react';
import { HiOutlineHome,HiUserGroup ,HiFastForward} from 'react-icons/hi'; 
 const iconMapping = {
  'home': HiOutlineHome,
   'user': HiUserGroup,
   null:HiFastForward,
   '':HiFastForward
};
export default function MultiLevelDropdown() {
  
    const listItemNavs=modules.map(data=>{
        const IconComponent=iconMapping[data.icon];
        console.log(IconComponent);
        return(
          <Sidebar.Collapse 
          icon={IconComponent}
          label={data.menuname}
        >
          {
             data.pages.map(page=>
              <Sidebar.Item href={page.href} icon={IconComponent}>
              { page.menuname}
            </Sidebar.Item>
  
             )
          }
        
        </Sidebar.Collapse>
        );
     
    }
         );
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {listItemNavs}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}



