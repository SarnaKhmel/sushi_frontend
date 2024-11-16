import React from "react";
import HomeAdmin from "../Home/HomeAdmin";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { Box } from "@mui/material";

const HomeAdminPage = () => {
    return (
        <LayoutAdmin>
            <Box sx={{ mt: 4 }}>
                <HomeAdmin />
            </Box>
        </LayoutAdmin>
    );
};

export default HomeAdminPage;
