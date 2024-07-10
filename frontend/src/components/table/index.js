import React from 'react'
import { 
    TableContainer, 
    TableData, 
    TableHead, 
    TableHeader, 
    TableHeading,  
    TableRow, 
    TableBody, 
    TableExtraHead } from "./style";

const Table = ({title, data, stat}) => {
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
  return (
    <>
        {title && 
            <TableHeading>
                <TableExtraHead>{title}</TableExtraHead>
            </TableHeading>
        }
        <TableContainer>
            <TableHead blank={stat? 'none' : ''}>
                <TableRow padding={stat? '0% 2%':''}>
                    <TableHeader>S/N</TableHeader>
                    <>
                    {Object.keys(data[0]).map((heading, i) => (
                        <TableHeader key={i}>{heading.replace(heading.charAt(0), heading.charAt(0).toUpperCase()).replace("_", " ")}</TableHeader>
                    ))}
                    </>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => {
                    const digit = (index + 1) % 2
                    return (
                    <TableRow padding={stat? '0% 2%':''} key={index} color={digit !== 0? '#F5EAFE' : 'transparent'}>
                        <TableData>{index + 1}</TableData>
                        <>
                        {Object.keys(item).map((heading, i) => (
                            <TableData none={heading === "rank"? "none": ""} color={heading === 'status'? checkStatus(item.status) : ""}>
                                {item[heading]}
                            </TableData>
                        ))}
                        </>
                    </TableRow>
                )})

                }
            </TableBody>
        </TableContainer>
    </>
  )
}

export default Table