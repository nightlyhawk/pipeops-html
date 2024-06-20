import { schedule_data } from "../../data/schedule-data";
import { 
    TableContainer, 
    TableData, 
    TableHead, 
    TableHeader, 
    TableHeading,  
    TableRow, 
    TableWrapper, 
    TableBody, 
    TableExtraHead } from "./style";


export default function Schedule(){
    function checkStatus(item){
        switch(item){
            case 'Attended':
                return 'green'
            case 'Upcoming':
                return '#D47F00'
            case 'Ongoing':
                return '#341949'
            default:
                return '#341949'
        }
    }
    return(
        <TableWrapper className='four'>
            <TableHeading>
                <TableExtraHead>Schedule for the day</TableExtraHead>
            </TableHeading>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeader>S/N</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Time</TableHeader>
                        <TableHeader>Location</TableHeader>
                        <TableHeader>Status</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule_data.map((item, index) => {
                        const digit = item.rank % 2
                        return (
                        <TableRow key={index} color={digit !== 0? '#F5EAFE' : 'transparent'}>
                           <TableData none="none">{item.rank}</TableData>
                            <TableData>
                               {item.title}
                            </TableData>
                            <TableData>
                                {item.time}
                            </TableData>
                            <TableData>
                                {item.location}
                            </TableData>
                            <TableData color={checkStatus(item.status)}>
                                {item.status}
                            </TableData>
                        </TableRow>
                    )})

                    }
                </TableBody>
            </TableContainer>
        </TableWrapper>
    )
}