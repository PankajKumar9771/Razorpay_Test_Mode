import { Box, Flex, Link, Heading, Spacer } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <Box bg="teal.500" px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Heading as={RouterLink} to="/" size="lg" color="white">
                    MyShop
                </Heading>
                <Spacer />
                <Flex alignItems={'center'}>
                    <Link as={RouterLink} to="/" px={2} color="white" fontWeight="bold">
                        Student Accessories
                    </Link>
                  
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;