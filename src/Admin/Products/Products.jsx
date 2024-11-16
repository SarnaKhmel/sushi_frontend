import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Tabs,
  Tab,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Chip,
  useTheme,
  styled
} from "@mui/material";
import AddProduct from "../AddProduct/AddProduct";
import adminMenuOptions from "../../testData/adminMenuOption.json";
import ProductsTable from "../ProductsTable/ProductsTable";
import Exel from "../Exel/Exel";
import SelectBlock from "../Select/Select";
import selectOptions from "../../testData/selectOptions.json";

const Products = ({ products }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [exelName, setExelName] = useState("Всі");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFilterClick = (index, option) => {
    setSelectedFilter(index);
    setFilter(option.type);
    setExelName(option.name);
  };

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
    } else if (filter === "sale") {
      setFilteredProducts(products.filter((item) => item.sale === true));
    } else if (filter === "week_sale") {
      setFilteredProducts(products.filter((item) => item.week_sale === true));
    } else if (filter !== "") {
      setFilteredProducts(products.filter((item) => item.type === filter));
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  useEffect(() => {
    const sortedProducts = [...filteredProducts];
    switch (sort) {
      case "price-up":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-down":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "popular-up":
        sortedProducts.sort((a, b) => b.viewsCount - a.viewsCount);
        break;
      case "weight-up":
        sortedProducts.sort((a, b) => a.weight - b.weight);
        break;
      case "weight-down":
        sortedProducts.sort((a, b) => b.weight - a.weight);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  }, [sort]);

  const handleSelectedOption = (value) => {
    setSort(value);
  };

  return (
        <Paper sx={{ mt: 2, mb: 4 }}>
          <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab
                label="Додати товар"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1.125rem' },
                  '&:hover': { color: 'primary.main' }
                }}
            />
            <Tab
                label="Всі товари"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1.125rem' },
                  '&:hover': { color: 'primary.main' }
                }}
            />
          </Tabs>

          {/* Add Product Tab Panel */}
          <TabPanel value={activeTab} index={0}>
            <AddProduct />
          </TabPanel>

          {/* All Products Tab Panel */}
          <TabPanel value={activeTab} index={1}>
            <Box sx={{ width: '100%', p: 2 }}>
              <Box sx={{ mb: 3 }}>
                <Exel products={filteredProducts} name={exelName} />
              </Box>

              <Box sx={{ mb: 3 }}>
                <SelectBlock
                    selectOptions={selectOptions}
                    handleSelectedOption={handleSelectedOption}
                />
              </Box>

              {/* Filter Chips */}
              <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 3,
                    px: 2,
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      borderRadius: '4px',
                    }
                  }}
              >
                {adminMenuOptions.map((option, index) => (
                    <StyledChip
                        key={index}
                        label={option.name}
                        onClick={() => handleFilterClick(index, option)}
                        color={selectedFilter === index ? "primary" : "default"}
                        variant={selectedFilter === index ? "filled" : "outlined"}
                    />
                ))}
              </Box>

              {/* Products Table */}
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h6">Продукти</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <ProductsTable products={filteredProducts} />
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
        </Paper>
  );
};

// Styled Components
const StyledChip = styled(Chip)(({ theme }) => ({
  fontSize: '1rem',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  '&.MuiChip-clickable': {
    cursor: 'pointer',
  },
}));

// Tab Panel Component
const TabPanel = ({ children, value, index, ...other }) => {
  return (
      <Box
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          {...other}
          sx={{
            p: 3,
            display: value !== index ? 'none' : 'block',
            opacity: value !== index ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
      >
        {value === index && children}
      </Box>
  );
};

export default Products;