import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../services/roleService';
import { useNavigate } from 'react-router-dom';
import AddRole from './addRole';
import {
    ListItem,
    ListHeader,
    ListContent,
    // Image,
    // List,
    Button,
    GridColumn,
    FormInput,
    Divider,
    Form,
    Grid,
    Segment,
    Container
} from 'semantic-ui-react'

import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Videocam from '@mui/icons-material/Videocam';
import Image from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Roles() {

    document.title = 'Roles';
    const roles = useSelector(state => state.roles.roles);
    return (
        <>
            <h2 className='text'><b>Roles</b></h2>
            <Container>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <GridColumn>
                            <List
                                component="nav"
                                sx={{
                                    maxWidth: 320,
                                }}
                            >
                                {roles.map((r, i) => (

                                    <ListItemButton key={i}>
                                        {r?.name}
                                        {/* <ListItemDecorator>
                                        <DeleteIcon />
                                        </ListItemDecorator>
                                    
                                        <ListItemDecorator>
                                        <EditIcon />
                                        </ListItemDecorator> */}
                                    </ListItemButton>
                                ))}


                                {/* </List>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <Videocam />
                                        </ListItemDecorator>
                                        Add another video
                                    </ListItemButton>

                                    <List>
                                        {roles.map((r, i) => (
                                            <ListItem className="text" key={i}>
                                                {r?.name}
                                                {console.log("e: ", r?.name)}
                                            </ListItem >
                                        ))} */}
                            </List>
                        </GridColumn>

                        <GridColumn verticalAlign='middle'>
                            <AddRole></AddRole>
                        </GridColumn>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment>
            </Container>
            {/* <Button className="text" variant="outlined" onClick={() => navigate('/addRole')}>add New Role</Button> */}
        </>
    );
}
