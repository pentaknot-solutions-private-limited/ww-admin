import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

export function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`dashboard-tabpanel-${index}`}
            aria-labelledby={`dashboard-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
