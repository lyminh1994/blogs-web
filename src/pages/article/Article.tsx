import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Container,
  CardHeader,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Article = () => {
  const [values, setValues] = useState({
    password: '',
    confirm: '',
  });

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const product = {
    id: 'randomUUID()',
    createdAt: '27/03/2019',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594',
  };

  const products = [
    {
      id: 'uuid()',
      name: 'Dropbox',
      imageUrl: '/static/images/products/product_1.png',
      updatedAt: Date.now(),
    },
    {
      id: 'uuid()',
      name: 'Medium Corporation',
      imageUrl: '/static/images/products/product_2.png',
      updatedAt: Date.now(),
    },
    {
      id: 'uuid()',
      name: 'Slack',
      imageUrl: '/static/images/products/product_3.png',
      updatedAt: Date.now(),
    },
    {
      id: 'uuid()',
      name: 'Lyft',
      imageUrl: '/static/images/products/product_4.png',
      updatedAt: Date.now(),
    },
    {
      id: 'uuid()',
      name: 'GitHub',
      imageUrl: '/static/images/products/product_5.png',
      updatedAt: Date.now(),
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Settings
        </Typography>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 3,
              }}
            >
              <Avatar alt="Product" src={product.media} variant="square" />
            </Box>
            <Typography align="center" color="textPrimary" gutterBottom variant="h5">
              {product.title}
            </Typography>
            <Typography align="center" color="textPrimary" variant="body1">
              {product.description}
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  Updated 2hr ago
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  {product.totalDownloads} Downloads
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Box sx={{ pt: 3 }}>
          <Card>
            <CardHeader subheader="Update password" title="Password" />
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Confirm password"
                margin="normal"
                name="confirm"
                onChange={handleChange}
                type="password"
                value={values.confirm}
                variant="outlined"
              />
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button color="primary" variant="contained">
                Update
              </Button>
            </Box>
          </Card>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Card>
            <CardContent>
              <List>
                {products.map((product, i) => (
                  <ListItem divider={i < products.length - 1} key={product.id}>
                    <ListItemAvatar>
                      <img
                        alt={product.name}
                        src={product.imageUrl}
                        style={{
                          height: 48,
                          width: 48,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.name}
                      secondary={`Updated ${product.updatedAt}`}
                    />
                    <IconButton edge="end" size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Article;
