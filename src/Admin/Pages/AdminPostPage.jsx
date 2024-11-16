import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  useTheme
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import AddPost from "../AddPost/AddPost";
import { fetchPosts } from "../../Redux/slices/posts";
import PostTable from "../PostTable/PostTable";

const AdminPostPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [activeTab, setActiveTab] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, update]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 1) {
      setUpdate(!update);
    }
  };

  return (
      <LayoutAdmin>
        <Box sx={{ width: '100%', p: 2 }}>
          {posts.status === "loaded" ? (
              <Paper sx={{ mt: 2, mb: 4 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                  <Tab
                      label="Додати пост"
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1.125rem' },
                        '&:hover': { color: 'primary.main' }
                      }}
                  />
                  <Tab
                      label="Всі пости"
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1.125rem' },
                        '&:hover': { color: 'primary.main' }
                      }}
                  />
                </Tabs>

                {/* Add Post Tab Panel */}
                <TabPanel value={activeTab} index={0}>
                  <AddPost />
                </TabPanel>

                {/* All Posts Tab Panel */}
                <TabPanel value={activeTab} index={1}>
                  <Box sx={{ width: '100%', p: 2 }}>
                    {/* Posts Table */}
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Typography variant="h6">Пости</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <PostTable posts={posts} />
                      </Table>
                    </TableContainer>
                  </Box>
                </TabPanel>
              </Paper>
          ) : (
              <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minHeight="50vh"
              >
                <Typography variant="h6">
                  Loading...
                </Typography>
              </Box>
          )}
        </Box>
      </LayoutAdmin>
  );
};

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

export default AdminPostPage;