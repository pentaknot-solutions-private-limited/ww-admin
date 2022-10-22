"use strict";
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 6762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UserDetailTabel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/InputBase"
var InputBase_ = __webpack_require__(8855);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(5612);
;// CONCATENATED MODULE: ./src/components/Tables/tableElement.tsx






const SearchWrapper = (0,styles_.styled)('div')(({ theme  })=>({
        display: 'flex',
        alignItems: 'end',
        width: '100%',
        maxWidth: '300px',
        margin: '0 0 0 auto',
        fontFamily: 'SF Compact Display'
    })
);
const Search = (0,styles_.styled)('div')(({ theme  })=>({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(33, 33, 33, 0.08);',
        width: '100%',
        fontFamily: 'SF Compact Display'
    })
);
const SearchIconWrapper = (0,styles_.styled)('div')(({ theme  })=>({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'SF Compact Display'
    })
);
const StyledInputBase = (0,styles_.styled)((InputBase_default()))(({ theme  })=>({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            fontFamily: 'SF Compact Display',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch'
            }
        }
    })
);
const LayoutWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        fontFamily: 'SF Compact Display',
        "@media (max-width: 1200px)": {
            display: "block"
        }
    })
);
const WrapperContainer = (/* unused pure expression or super */ null && (styled("div")`
  padding: 20px 40px;
  background: #fffef5;
  width: 100%;
  height: 100vh;
  font-family:'SF Compact Display';
  @media screen and (max-width: 1200px) {
    padding: 20px 20px 20px 100px;
  }
`));
const TextwrapperContainer = (/* unused pure expression or super */ null && (styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  font-family:'SF Compact Display';
`));
const DashboardCard = (/* unused pure expression or super */ null && (styled(Box)`
  padding: 30px 24px;
  border-radius: 8px;
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 366px;
  font-family:'SF Compact Display';
  :not(:last-child) {
    margin-right: 30px;
  }
`));
const StyledTableContainer = (0,styles_.styled)(material_.TableContainer)(({ theme  })=>({
        border: "1px solid rgba(224, 224, 224, 1)",
        borderRadius: "4px",
        marginBottom: "30px",
        fontFamily: 'SF Compact Display'
    })
);
const StyledTableCell = (0,styles_.styled)(material_.TableCell)(({ theme  })=>({
        [`&.${TableCell_.tableCellClasses.head}`]: {
            backgroundColor: "#fff",
            color: "#272833",
            fontSize: 16,
            fontWeight: 600,
            whiteSpace: "nowrap",
            fontFamily: 'SF Compact Display'
        },
        [`&.${TableCell_.tableCellClasses.body}`]: {
            fontSize: 16,
            fontWeight: 600,
            fontFamily: 'SF Compact Display'
        }
    })
);
const StyledTableRow = (0,styles_.styled)(material_.TableRow)(({ theme  })=>({
        cursor: 'pointer',
        "&:nth-of-type(odd)": {
            backgroundColor: "#F9F9F9",
            fontFamily: 'SF Compact Display'
        },
        "&:nth-of-type(even)": {
            backgroundColor: "#FFFFFF",
            fontFamily: 'SF Compact Display'
        },
        // hide last border
        "& td": {
            border: 0,
            fontFamily: 'SF Compact Display'
        }
    })
);
const StyledTableFooter = (0,styles_.styled)(material_.TableFooter)(({ theme  })=>({
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        backgroundColor: "#fff",
        fontFamily: 'SF Compact Display',
        "& td": {
            border: 0,
            fontFamily: 'SF Compact Display'
        }
    })
);
// dashboard nested page componentStyling
const LightGrayText = (/* unused pure expression or super */ null && (styled("h3")`
font-weight: 500;
font-size: 24px;
color: #BDBDBD;
margin: 0px 0px 15px 0px;
text-transform: capitalize;
font-family:'SF Compact Display';
`));
const FlexSpaceBetween = (/* unused pure expression or super */ null && (styled("div")`
display: flex;
justify-content: space-between;
align-items: center;
font-family:'SF Compact Display';
margin-bottom: 15px;
`));
const IdText = (/* unused pure expression or super */ null && (styled("h2")`
font-size: 48px;
font-weight:400;
color: #000000;
margin:0px 0px 15px 0px;
font-family:'SF Compact Display';
`));
const StyledButton = (0,styles_.styled)(material_.Button)(({ theme  })=>({
        backgroundColor: "rgba(63, 81, 181, 0.08)",
        border: "1px solid rgba(63, 81, 181, 0.5)",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "none",
        fontFamily: 'SF Compact Display',
        ':hover': {
            backgroundColor: "rgba(63, 81, 181, 0.08)",
            color: "rgba(0, 0, 0, 0.87)"
        }
    })
);
const InfoCardWrapper = (/* unused pure expression or super */ null && (styled("div")`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
padding:12px 24px;
margin:25px 0px;
font-family:'SF Compact Display';
`));
const StyledDisabledField = (/* unused pure expression or super */ null && (styled(TextField)`
background: rgba(33, 33, 33, 0.08);
border-radius: 4px 4px 0px 0px;
color: rgba(0, 0, 0, 0.87);
font-family:'SF Compact Display';
& .MuiOutlinedInput-notchedOutline{
    border:none;
    font-family:'SF Compact Display';
}
`));
const StyledDrawer = (/* unused pure expression or super */ null && (styled(Drawer)`
& .MuiDrawer-paper{
    max-width:430px;
    width:100%;
    font-family:'SF Compact Display';
}

`));
const CommentDrawerHeader = (/* unused pure expression or super */ null && (styled('div')`
padding: 20px 25px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:1px solid #DEDEDE;
font-family:'SF Compact Display';
& h5 {
    font-size: 20px;
    color: #373737;
    font-weight:400;
    margin:0px;

}
`));
const CommentTableContainer = (/* unused pure expression or super */ null && (styled(TableContainer)`
padding:15px 10px;
border:0px;
box-shadow:none;
font-family:'SF Compact Display';
& .MuiTable-root{
    border:1px solid #E7E7ED;
    box-sizing: border-box;
    border-radius: 4px;
}

`));

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/FirstPage"
var FirstPage_ = __webpack_require__(3276);
var FirstPage_default = /*#__PURE__*/__webpack_require__.n(FirstPage_);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__(7834);
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(547);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
// EXTERNAL MODULE: external "@mui/icons-material/LastPage"
var LastPage_ = __webpack_require__(7967);
var LastPage_default = /*#__PURE__*/__webpack_require__.n(LastPage_);
;// CONCATENATED MODULE: ./src/components/Tables/tabelPaginationAction.tsx








function TablePaginationActions(props) {
    const theme = (0,styles_.useTheme)();
    const { count , page , rowsPerPage , onPageChange  } = props;
    const handleFirstPageButtonClick = (event)=>{
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event)=>{
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event)=>{
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event)=>{
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            flexShrink: 0,
            ml: 2.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: handleFirstPageButtonClick,
                disabled: page === 0,
                "aria-label": "first page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ jsx_runtime_.jsx((LastPage_default()), {
                }) : /*#__PURE__*/ jsx_runtime_.jsx((FirstPage_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: handleBackButtonClick,
                disabled: page === 0,
                "aria-label": "previous page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {
                }) : /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowLeft_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "next page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowLeft_default()), {
                }) : /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: handleLastPageButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "last page",
                children: theme.direction === 'rtl' ? /*#__PURE__*/ jsx_runtime_.jsx((FirstPage_default()), {
                }) : /*#__PURE__*/ jsx_runtime_.jsx((LastPage_default()), {
                })
            })
        ]
    }));
}
/* harmony default export */ const tabelPaginationAction = (TablePaginationActions);

// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./src/utils/currecyFormatter.ts
var currecyFormatter = __webpack_require__(8433);
// EXTERNAL MODULE: ./src/utils/axiosInstance.ts
var axiosInstance = __webpack_require__(5669);
// EXTERNAL MODULE: ./src/context/loading.ts
var context_loading = __webpack_require__(1622);
// EXTERNAL MODULE: ./src/context/refreshApi.ts
var refreshApi = __webpack_require__(6500);
;// CONCATENATED MODULE: ./public/trash.svg
/* harmony default export */ const trash = ({"src":"/_next/static/media/trash.1abca1ff.svg","height":24,"width":24});
// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__(9191);
;// CONCATENATED MODULE: ./src/components/Tables/index.tsx

/* eslint-disable @next/next/no-img-element */ 













function UserDetailTabel({ userDatas , headCells , inventoryOrdering , setUserData , setImageReorder , parentPage , disableclickable , isPagination  }) {
    // States
    const [page, setPage] = external_react_default().useState(0);
    const [rowsPerPage, setRowsPerPage] = external_react_default().useState(5);
    const [order1, setOrder] = external_react_default().useState();
    const [orderBy1, setOrderBy] = external_react_default().useState();
    const [filterFn, setFilterFn] = external_react_default().useState({
        fn: (items)=>{
            return items;
        }
    });
    // Variables
    const router = (0,router_.useRouter)();
    const asc = "asc";
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userDatas.length) : 0;
    const PageOrderingAndPagination = ()=>{
        if (inventoryOrdering) {
            return sortingTableWithCarOrder(filterFn.fn(userDatas));
        } else if (isPagination) {
            return sortingTable(filterFn.fn(userDatas), getComparator(order1, orderBy1)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        } else {
            return sortingTable(filterFn.fn(userDatas), getComparator(order1, orderBy1));
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
    const { loading , setLoading  } = (0,external_react_.useContext)(context_loading/* default */.Z);
    const { refreshData , setRefreshData  } = (0,external_react_.useContext)(refreshApi/* default */.Z);
    // Functions
    const searchHandleChange = (e)=>{
        let target = e.target;
        setFilterFn({
            fn: (items)=>{
                if (target.value == "") {
                    return items;
                } else {
                    return items.filter((item)=>JSON.stringify(item).toLowerCase().includes(target.value.toLowerCase())
                    );
                }
            }
        });
    };
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    function sortingTable(array, comparator) {
        const stabilizedThis = array.map((el, index)=>[
                el,
                index
            ]
        );
        stabilizedThis.sort((a, b)=>{
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el)=>el[0]
        );
    }
    function sortingTableWithCarOrder(array) {
        return array === null || array === void 0 ? void 0 : array.sort(function(a, b) {
            var ref;
            return (a === null || a === void 0 ? void 0 : (ref = a.Car_Detail) === null || ref === void 0 ? void 0 : ref.carOrder) - (b === null || b === void 0 ? void 0 : b.Car_Detail.carOrder);
        });
    }
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    function getComparator(order, orderBy) {
        return order === "desc" ? (a, b)=>descendingComparator(a, b, orderBy)
         : (a, b)=>-descendingComparator(a, b, orderBy)
        ;
    }
    const handleSortRequest = (cellId)=>{
        const isAsc = orderBy1 === cellId && order1 === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(cellId);
    };
    const handleItemClick = (item)=>{
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
                pathname: `/${parentPage}/${dynamicPath}`
            });
        }
    };
    const onClickAction = (actionCase, id)=>{
        switch(actionCase){
            case "deleteInventoryCar":
                setLoading(true);
                console.log("deleting...  the car" + id);
                if (confirm("Are you sure you really want to delete this car!") == true) {
                    axiosInstance/* default.post */.Z.post(`/car/delete/${id}`).then((res)=>{
                        console.log(res.data);
                        setLoading(false);
                        setRefreshData(res);
                    }).catch((error)=>{
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
    const onDragEnd = (e)=>{
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
    (0,external_react_.useEffect)(()=>{
    // console.log(userDatas);
    }, [
        userDatas
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "table-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledTableContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
                onDragEnd: onDragEnd,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableHead, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableRow, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                        colSpan: 9,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchWrapper, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Search, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SearchIconWrapper, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputBase, {
                                                        placeholder: "Search…",
                                                        inputProps: {
                                                            "aria-label": "search"
                                                        },
                                                        onChange: searchHandleChange
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableRow, {
                                    children: headCells.map(({ id , name , disabledSorting , onClickAction  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                            children: disabledSorting ? name : /*#__PURE__*/ jsx_runtime_.jsx(material_.TableSortLabel, {
                                                active: orderBy1 === id,
                                                direction: orderBy1 === id ? order1 : asc,
                                                // direction="asc"
                                                onClick: ()=>{
                                                    handleSortRequest(id);
                                                },
                                                children: name
                                            })
                                        }, `tabelhead-${index}`)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
                            droppableId: "inventory-table",
                            children: (provider1)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableBody, {
                                    ref: provider1.innerRef,
                                    ...provider1.droppableProps,
                                    children: [
                                        rowPerPagePagination.map((userData, id1)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
                                                draggableId: `inventory-tabelrow-${id1}`,
                                                isDragDisabled: !inventoryOrdering,
                                                index: id1,
                                                children: (provider)=>{
                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledTableRow, {
                                                        ref: provider.innerRef,
                                                        ...provider.draggableProps,
                                                        ...provider.dragHandleProps,
                                                        hover: true,
                                                        onClick: ()=>handleItemClick(userData)
                                                        ,
                                                        sx: {
                                                            "&:last-child td, &:last-child th": {
                                                                border: 0
                                                            }
                                                        },
                                                        children: headCells.map(({ id , format , action  }, key)=>{
                                                            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
                                                            return id == "address" || id == "message" || id == "Address1" || // id == "carName" ||
                                                            id == "query" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    minWidth: 250
                                                                },
                                                                children: userData[id]
                                                            }, `tabelcell-${key}`) : id == "createdAt" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: external_moment_default()(userData[id]).format("MM/DD/YYYY")
                                                            }, `tabelcell-${key}`) : id == "status" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                    variant: "outlined",
                                                                    className: userData["status"] == "Available" ? "available" : userData["status"] == "Sold" ? "sold" : userData["status"] == "Negotiation" ? "negotiation" : userData["status"] == "Evaluating" ? "evaluating" : "rejected",
                                                                    children: userData["status"]
                                                                })
                                                            }, `tabelcell-${key}`) : id == "carImage" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: (userData === null || userData === void 0 ? void 0 : userData.Car_Images.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "inventory-table-img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: (ref1 = userData === null || userData === void 0 ? void 0 : (ref = userData.Car_Images) === null || ref === void 0 ? void 0 : ref.find((item)=>item.imageOrder == 0
                                                                        )) === null || ref1 === void 0 ? void 0 : ref1.imageLink,
                                                                        alt: userData === null || userData === void 0 ? void 0 : userData.Car_Images[0].title
                                                                    })
                                                                })
                                                            }, `tabelcell-${key}`) : id == "firstName" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["firstName"][0].toUpperCase() + userData["firstName"].substring(1) + " " + (userData["lastName"] && userData["lastName"][0].toUpperCase() + userData["lastName"].substring(1))
                                                            }, `tabelcell-${key}`) : id == "User" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["User"] && userData["User"]["firstName"][0].toUpperCase() + userData["User"]["firstName"].substring(1) + " " + (userData["User"]["lastName"] && userData["User"]["lastName"][0].toUpperCase() + userData["User"]["lastName"].substring(1))
                                                            }, `tabelcell-${key}`) : id == "userContactNo" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["User"] && userData["User"]["phoneNumber"]
                                                            }, `tabelcell-${key}`) : id == "userEmail" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["User"] && userData["User"]["emailId"]
                                                            }, `tabelcell-${key}`) : id == "Brand" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Brand"] && userData["Brand"]["_id"] == "626e38f26e4527d955eabe65" ? userData["otherName"] : userData["Brand"]["name"]
                                                            }, `tabelcell-${key}`) : id == "requestPrice" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["requestPrice"] && (0,currecyFormatter/* currencyFormatter */.o)(userData["requestPrice"])
                                                            }, `tabelcell-${key}`) : id == "bookOnDateTime" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["bookOnDateTime"] && external_moment_default()(userData["bookOnDateTime"]).format(format)
                                                            }, `tabelcell-${key}`) : id == "carNumber" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Car_Detail"] && ((ref2 = userData["Car_Detail"]) === null || ref2 === void 0 ? void 0 : ref2.carNumber)
                                                            }, `tabelcell-${key}`) : id == "carName" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                children: userData["Car_Detail"] && ((ref3 = userData["Car_Detail"]) === null || ref3 === void 0 ? void 0 : ref3.name)
                                                            }, `tabelcell-${key}`) : id == "year" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Car_Detail"] && ((ref4 = userData["Car_Detail"]) === null || ref4 === void 0 ? void 0 : ref4.year)
                                                            }, `tabelcell-${key}`) : id == "milege" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Car_Detail"] && ((ref5 = userData["Car_Detail"]) === null || ref5 === void 0 ? void 0 : ref5.milege)
                                                            }, `tabelcell-${key}`) : id == "ownerShip" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Car_Detail"] && ((ref6 = userData["Car_Detail"]) === null || ref6 === void 0 ? void 0 : ref6.ownerShip)
                                                            }, `tabelcell-${key}`) : id == "kmDriven" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData["Car_Detail"] && ((ref7 = userData["Car_Detail"]) === null || ref7 === void 0 ? void 0 : ref7.kmDriven)
                                                            }, `tabelcell-${key}`) : id == "delete" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "javascript:void(0)",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onClickAction(action, userData["_id"]);
                                                                    },
                                                                    className: "delete-btn",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: trash.src,
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }, `tabelcell-${key}`) : /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                sx: {
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: userData[id] && userData[id]
                                                            }, `tabelcell-${key}`);
                                                        })
                                                    }));
                                                }
                                            }, `inventory-tabelrow-${id1}`));
                                        }),
                                        emptyRows > 0 && /*#__PURE__*/ jsx_runtime_.jsx(StyledTableRow, {
                                            style: {
                                                height: 53 * emptyRows
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                colSpan: 9
                                            })
                                        })
                                    ]
                                }));
                            }
                        }),
                        isPagination ? /*#__PURE__*/ jsx_runtime_.jsx(StyledTableFooter, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TableRow, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TablePagination, {
                                    rowsPerPageOptions: [
                                        5,
                                        6,
                                        8,
                                        {
                                            label: "All",
                                            value: -1
                                        }
                                    ],
                                    colSpan: 9,
                                    count: userDatas.length,
                                    rowsPerPage: rowsPerPage,
                                    page: page,
                                    SelectProps: {
                                        inputProps: {
                                            "aria-label": "rows per page"
                                        },
                                        native: true
                                    },
                                    onPageChange: handleChangePage,
                                    onRowsPerPageChange: handleChangeRowsPerPage,
                                    ActionsComponent: tabelPaginationAction
                                })
                            })
                        }) : null
                    ]
                })
            })
        })
    }));
};


/***/ }),

/***/ 6500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RefreshAPiContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    refreshData: "",
    setRefreshData: (loading)=>{
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshAPiContext);


/***/ }),

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ currencyFormatter)
/* harmony export */ });
/* unused harmony export convertToNum */
const currencyFormatter = (num)=>{
    // return '₹' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if (!num) return;
    const str = num.toString().split(".");
    const convertedValue = str[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + (str[1] ? "." + str[1] : "");
    return `₹ ${convertedValue}`;
};
const convertToNum = (str)=>{
    let value;
    if (str) {
        value = str === null || str === void 0 ? void 0 : str.replaceAll(",", "");
    }
    return Number(value);
};


/***/ })

};
;