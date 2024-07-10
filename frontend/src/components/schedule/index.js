import { schedule_data } from "../../data/schedule-data";
import { 
    TableWrapper } from "./style";
import Table from "../table";


export default function Schedule(){
    return(
        <TableWrapper className='four'>
            <Table 
                title={"Schedule for the day"}
                data={schedule_data}
            />
        </TableWrapper>
    )
}