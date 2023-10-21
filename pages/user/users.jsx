import MainLayout from "../../layout/mainlayout"
import  Breadcrumb from'../../components/Breadcrumb'
import Tab from '../../components/Tab'
import Table from '../../components/Table'
export default function user(){
    return (
        <MainLayout>
         <Breadcrumb></Breadcrumb>
          <h1>Users</h1>
          <Tab></Tab>
          <Table></Table>
        </MainLayout>
    );
}