import { Box, SimpleGrid } from "@chakra-ui/react";
import OredrsTable from "views/admin/ordersTable/components/OrdersTable";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { productsData } from "./variables/columnsData";

export default function Settings() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const productResponse = await axios.get('https://elkindy-project-backend.onrender.com/api/order/getallorders');
            setProductData(productResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const cancelRef = useRef();

    const confirmDelete = (Id) => {
        setDeletingId(Id);
        setIsDeleteDialogOpen(true);
    };

    const cancelDelete = () => {
        setIsDeleteDialogOpen(false);
    };
    const handleDelete = async () => {
        setIsDeleteDialogOpen(false);
        try {
            await axios.delete(`https://elkindy-project-backend.onrender.com/api/order/delete/${deletingId}`);

            fetchData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const [isModalOpenPro, setIsModalOpenPro] = useState(false);

    //for admin
    const openModalPro = () => {
        setIsModalOpenPro(true);
    };
    const closeModalPro = () => {
        setIsModalOpenPro(false);
    };


    return (
        <div style={{ overflowX: 'hidden' }}>
        <Box  width="3250px" pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 2 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <OredrsTable
                    columnsData={productsData}
                    tableData={productData}
                    handleDelete={handleDelete}
                    cancelDelete={cancelDelete}
                    cancelRef={cancelRef}
                    confirmDelete={confirmDelete}
                    isDeleteDialogOpen={isDeleteDialogOpen}
                    openModalPro={openModalPro}
                    closeModalPro={closeModalPro}
                    isModalOpenPro={isModalOpenPro}
                    fetchData={fetchData}
                />
            </SimpleGrid>
        </Box>
        </div>
    );
}
