import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CommentTableContainer } from "../GlobalElement";
import moment from "moment";

export default function CommentTabel({ data }: any) {
  return (
    <CommentTableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item: any, index: number) => (
              <TableRow key={`comment-${index}`}>
                <TableCell>
                  {moment(item.createdAt).format("DD-MM-YYYY")}
                </TableCell>
                <TableCell>{item.comment}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </CommentTableContainer>
  );
}
