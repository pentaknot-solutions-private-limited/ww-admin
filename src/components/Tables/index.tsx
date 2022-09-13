/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import {
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Box,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import {
  StyledTableContainer,
  StyledTableCell,
  StyledTableRow,
  StyledTableFooter,
} from "./tableElement";
import TablePaginationActions from "./tabelPaginationAction";
import {
  SearchWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./tableElement";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import moment from "moment";
import Image from "next/image";
import { currencyFormatter } from "../../utils/currecyFormatter";
import axiosInstance from "../../utils/axiosInstance";
import DialogBox from "../dialog";
import LoadingContext from "../../context/loading";
import RefreshAPiContext from "../../context/refreshApi";
import TrashIcon from "../../../public/trash.svg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface tableParamTypes {
  userDatas: any;
  setUserData?: any;
  setImageReorder?: any;
  inventoryOrdering?: boolean;
  headCells: any;
  parentPage?: any;
  disableclickable?: any;
  isPagination?: boolean;
}
export default function UserDetailTabel({
  userDatas,
  headCells,
  inventoryOrdering,
  setUserData,
  setImageReorder,
  parentPage,
  disableclickable,
  isPagination,
}: tableParamTypes) {
  // States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState<any>();
  const [orderBy, setOrderBy] = React.useState();
  const [filterFn, setFilterFn] = React.useState({
    fn: (items: any) => {
      return items;
    },
  });

  // Variables
  const router = useRouter();
  const asc = "asc";
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userDatas.length) : 0;

  const PageOrderingAndPagination = () => {
    if (inventoryOrdering) {
      return sortingTableWithCarOrder(filterFn.fn(userDatas));
    } else if (isPagination) {
      return sortingTable(
        filterFn.fn(userDatas),
        getComparator(order, orderBy)
      ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    } else {
      return sortingTable(
        filterFn.fn(userDatas),
        getComparator(order, orderBy)
      );
    }
  };

  const rowPerPagePagination = PageOrderingAndPagination();

  // const rowPerPagePagination = inventoryOrdering
  //   ? sortingTableWithCarOrder(filterFn.fn(userDatas))
  //   : sortingTable(filterFn.fn(userDatas), getComparator(order, orderBy));

  // rowsPerPage > 0
  //   ? sortingTable(
  //       filterFn.fn(userDatas),
  //       getComparator(order, orderBy)
  //     ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //   : sortingTable(filterFn.fn(userDatas), getComparator(order, orderBy));

  // const orderedUserData = inventoryOrdering
  //   ? userDatas?.sort(function (a: any, b: any) {
  //       return a.Car_Detail.carOrder - b.Car_Detail.carOrder;
  //     })
  //   : userDatas;

  const { loading, setLoading } = useContext(LoadingContext);
  const { refreshData, setRefreshData } = useContext(RefreshAPiContext);

  // Functions

  const searchHandleChange = (e: any) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") {
          return items;
        } else {
          return items.filter((item: any) =>
            JSON.stringify(item)
              .toLowerCase()
              .includes(target.value.toLowerCase())
          );
        }
      },
    });
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function sortingTable(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
  }
  function sortingTableWithCarOrder(array: any) {
    return array?.sort(function (a: any, b: any) {
      return a?.Car_Detail?.carOrder - b?.Car_Detail.carOrder;
    });
  }

  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order: any, orderBy: any) {
    return order === "desc"
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  }

  const handleSortRequest = (cellId: any) => {
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  };

  const handleItemClick = (item: any) => {
    //Redirect to new route from here with the item data
    // e.preventDefault()
    if (!disableclickable) {
      let dynamicPath;

      if (parentPage == "query") {
        dynamicPath = item.id;
      } else {
        dynamicPath = item._id;
      }
      console.log(dynamicPath);
      router.push({
        pathname: `/${parentPage}/${dynamicPath}`,
      });
    }
  };

  const onClickAction = (actionCase: any, id?: any) => {
    switch (actionCase) {
      case "deleteInventoryCar":
        setLoading(true);
        console.log("deleting...  the car" + id);
        if (
          confirm("Are you sure you really want to delete this car!") == true
        ) {
          axiosInstance
            .post(`/car/delete/${id}`)
            .then((res: any) => {
              console.log(res.data);
              setLoading(false);
              setRefreshData(res);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
        break;

      default:
        break;
    }
  };

  const onDragEnd = (e: any) => {
    if (!e.destination) return;
    let tempData = Array.from(userDatas);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    // let orderListData = tempData.map((item: any, index: number) => {
    //   item.Car_Detail.carOrder = index;
    // });
    // console.log(tempData, orderListData);
    setImageReorder(tempData);
    console.log(tempData);
  };
  // Effects
  useEffect(() => {
    // console.log(userDatas);
  }, [userDatas]);

  return (
    <div className="table-wrapper">
      {/* <SearchInput/> */}

      <StyledTableContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell colSpan={9}>
                  <SearchWrapper>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={searchHandleChange}
                      />
                    </Search>
                  </SearchWrapper>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                {headCells.map(
                  (
                    { id, name, disabledSorting, onClickAction }: any,
                    index: any
                  ) => (
                    <StyledTableCell key={`tabelhead-${index}`}>
                      {disabledSorting ? (
                        name
                      ) : (
                        <TableSortLabel
                          active={orderBy === id}
                          direction={orderBy === id ? order : asc}
                          // direction="asc"
                          onClick={() => {
                            handleSortRequest(id);
                          }}
                        >
                          {name}
                        </TableSortLabel>
                      )}
                    </StyledTableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <Droppable droppableId="inventory-table">
              {(provider) => (
                <TableBody ref={provider.innerRef} {...provider.droppableProps}>
                  {rowPerPagePagination.map((userData: any, id: any) => (
                    <Draggable
                      key={`inventory-tabelrow-${id}`}
                      draggableId={`inventory-tabelrow-${id}`}
                      isDragDisabled={!inventoryOrdering}
                      index={id}
                    >
                      {(provider) => (
                        <StyledTableRow
                          ref={provider.innerRef}
                          {...provider.draggableProps}
                          {...provider.dragHandleProps}
                          hover
                          onClick={() => handleItemClick(userData)}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {headCells.map(
                            ({ id, format, action }: any, key: any) => {
                              return id == "address" ||
                                id == "message" ||
                                id == "Address1" ||
                                // id == "carName" ||
                                id == "query" ? (
                                <TableCell
                                  key={`tabelcell-${key}`}
                                  sx={{ minWidth: 250 }}
                                >
                                  {userData[id]}
                                </TableCell>
                              ) : id == "createdAt" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {moment(userData[id]).format("MM/DD/YYYY")}
                                </TableCell>
                              ) : id == "status" ? (
                                <TableCell key={`tabelcell-${key}`}>
                                  <Button
                                    variant="outlined"
                                    className={
                                      userData["status"] == "Available"
                                        ? "available"
                                        : userData["status"] == "Sold"
                                        ? "sold"
                                        : userData["status"] == "Negotiation"
                                        ? "negotiation"
                                        : userData["status"] == "Evaluating"
                                        ? "evaluating"
                                        : "rejected"
                                    }
                                  >
                                    {userData["status"]}
                                  </Button>
                                </TableCell>
                              ) : id == "carImage" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData?.Car_Images.length > 0 && (
                                    <div className="inventory-table-img">
                                      <img
                                        src={
                                          userData?.Car_Images?.find(
                                            (item: any) => item.imageOrder == 0
                                          )?.imageLink
                                        }
                                        alt={userData?.Car_Images[0].title}
                                      />
                                    </div>
                                  )}
                                </TableCell>
                              ) : id == "firstName" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["firstName"][0].toUpperCase() +
                                    userData["firstName"].substring(1) +
                                    " " +
                                    (userData["lastName"] &&
                                      userData["lastName"][0].toUpperCase() +
                                        userData["lastName"].substring(1))}
                                </TableCell>
                              ) : id == "User" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["User"] &&
                                    userData["User"][
                                      "firstName"
                                    ][0].toUpperCase() +
                                      userData["User"]["firstName"].substring(
                                        1
                                      ) +
                                      " " +
                                      (userData["User"]["lastName"] &&
                                        userData["User"][
                                          "lastName"
                                        ][0].toUpperCase() +
                                          userData["User"][
                                            "lastName"
                                          ].substring(1))}
                                </TableCell>
                              ) : id == "userContactNo" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["User"] &&
                                    userData["User"]["phoneNumber"]}
                                </TableCell>
                              ) : id == "userEmail" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["User"] &&
                                    userData["User"]["emailId"]}
                                </TableCell>
                              ) : id == "Brand" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Brand"] &&
                                  userData["Brand"]["_id"] ==
                                    "626e38f26e4527d955eabe65"
                                    ? userData["otherName"]
                                    : userData["Brand"]["name"]}
                                </TableCell>
                              ) : id == "requestPrice" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["requestPrice"] &&
                                    currencyFormatter(userData["requestPrice"])}
                                </TableCell>
                              ) : id == "bookOnDateTime" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["bookOnDateTime"] &&
                                    moment(userData["bookOnDateTime"]).format(
                                      format
                                    )}
                                </TableCell>
                              ) : id == "carNumber" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.carNumber}
                                </TableCell>
                              ) : id == "carName" ? (
                                <TableCell key={`tabelcell-${key}`}>
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.name}
                                </TableCell>
                              ) : id == "year" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.year}
                                </TableCell>
                              ) : id == "milege" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.milege}
                                </TableCell>
                              ) : id == "ownerShip" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.ownerShip}
                                </TableCell>
                              ) : id == "kmDriven" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData["Car_Detail"] &&
                                    userData["Car_Detail"]?.kmDriven}
                                </TableCell>
                              ) : id == "delete" ? (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  <a
                                    href="javascript:void(0)"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onClickAction(action, userData["_id"]);
                                    }}
                                    className="delete-btn"
                                  >
                                    <img src={TrashIcon.src} alt="" />
                                  </a>
                                </TableCell>
                              ) : (
                                <TableCell
                                  sx={{ whiteSpace: "nowrap" }}
                                  key={`tabelcell-${key}`}
                                >
                                  {userData[id] && userData[id]}
                                </TableCell>
                              );
                            }
                          )}
                        </StyledTableRow>
                      )}
                    </Draggable>
                  ))}

                  {emptyRows > 0 && (
                    <StyledTableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={9} />
                    </StyledTableRow>
                  )}
                </TableBody>
              )}
            </Droppable>
            {isPagination ? (
              <StyledTableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 6, 8, { label: "All", value: -1 }]}
                    colSpan={9}
                    count={userDatas.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </StyledTableFooter>
            ) : null}
          </Table>
        </DragDropContext>
      </StyledTableContainer>
    </div>
  );
}
