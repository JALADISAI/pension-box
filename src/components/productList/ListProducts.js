import React, { useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Filters from './filters';
import ProductDetails from '../ProductDetails';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ListProducts = (props) => {
  
  const [ productDetails,setProductDetails]= useState(false);
	const handleViewDetails= (id) => {
		
		setProductDetails(true);
      props.handleViewDetailsClick(id)
	}
	console.log("ssss",props.productList);
    return(
        <div>
			<div style={{display: `inline-block`, width: `20%`, position: `fixed`}}>
				<Filters />
			</div>
			<div style={{display: `inline-block`, width: `80%`, position: `relative`, left: `20%`}}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
						{props.productList.map((item) => (
						<Grid xs={2} sm={4} md={4} key={item.id}>
							<Item>
								<div>
									<img style={{maxWidth: 200}} src={item.image} />
									<div>
										<div>
											<span>{item.title}</span>
										</div>
										<div>
											<label>{`$ ${item.price}`}</label>
											<span style={{marginLeft: 15}}>{item.rating?.rate}</span>
										</div>
										{/* <a href='/product-details'>View details</a> */}
										<button onClick={() => {handleViewDetails(item.id)}}>viewDetails</button>
									</div>
								</div>
							</Item>
						</Grid>
						))}
					</Grid>
				</Box>
			</div>
		</div>
    )
}

export default ListProducts