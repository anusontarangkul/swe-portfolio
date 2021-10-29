// import React, { useState } from 'react';
// import Drawer from '@mui/material/Drawer';
// import { makeStyles } from '@mui/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { SwipeableDrawer, Divider } from '@mui/material';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// const Layout = ({ children }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <AppBar
//       sx={{
//         position: 'static',
//         height: 60,
//       }}
//     >
//       <Toolbar>
//         <MenuIcon
//           sx={{
//             marginLeft: 1,
//             fontSize: '50px',
//           }}
//           onClick={() => setOpen(true)}
//         />
//         <Typography
//           sx={{
//             fontSize: 26,
//             marginLeft: 1,
//           }}
//         >
//           Coding David
//         </Typography>
//         <SwipeableDrawer
//           anchor='left'
//           open={open}
//           onClose={() => setOpen(false)}
//           onOpen={() => {}}
//         >
//           <div style={{ width: '300px' }}>
//             <AppBar
//               sx={{
//                 position: 'static',
//                 height: 60,
//                 backgroundColor: 'pink',
//               }}
//             >
//               <Toolbar>
//                 <MenuIcon
//                   sx={{
//                     marginLeft: 1,
//                     fontSize: '50px',
//                   }}
//                   onClick={() => setOpen(false)}
//                 />
//               </Toolbar>
//             </AppBar>
//           </div>
//         </SwipeableDrawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Layout;
