import Navbar from'./navbar'
import './body.css'
import  Breadcrumb  from "../components/Breadcrumb"
import Tab from "../components/Tab"
import Table from "../components/Table"
export default function body({islogin,children}){
    if(islogin) 
    return(
       <div className='body'>
       <div className='left'>
       <Navbar></Navbar>
       </div>
       <div className='right'>
         {/* <Breadcrumb></Breadcrumb>
          <Tab></Tab>
          <Table></Table> */}
          {children}
       </div>
       </div>
        
    );
    else return (
        <div style={{height:'1000px',textAlign:'center',lineHeight:'500px'}}>Hãy đăng nhập để sử dụng các chức năng của App!!!</div>
    );
}