/* eslint-disable react/destructuring-assignment */
import {
    Box,
    Flex,
    // useMediaQuery,
} from '@chakra-ui/react';
import {
    FC,
    // useEffect,
} from 'react';
import { Link } from 'react-router-dom';

const Container: FC = ({ children }) => {
    // let isLargerThan900 = useMediaQuery(`(min-width: 900px)`);

    // useEffect(() => {
    //     isLargerThan900 = useMediaQuery(`(min-width: 900px)`);
    // }, []);

    const StyledBox = (props: any) => (
        <Box
            _hover={{
                textDecoration: `underline`,
                color: `coral`,
            }}
            color="white"
        >
            {props.children}
        </Box>
    );

    return (
        <>
            <Flex
                width="100%"
                background="pink"
                justifyContent="center"
                paddingTop="2rem"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor=""
                    color="white"
                    width="40%"
                >
                    <StyledBox>
                        <Link to="/">
                            Home
                        </Link>
                    </StyledBox>

                    <StyledBox>
                        <Link to="/events">
                            Events
                        </Link>
                    </StyledBox>

                    <StyledBox>
                        <Link to="/drinks">
                            Drinks
                        </Link>
                    </StyledBox>

                    <StyledBox>
                        <Link to="/food">
                            Food
                        </Link>
                    </StyledBox>

                    <StyledBox>
                        <Link to="/reviews">
                            Reviews
                        </Link>
                    </StyledBox>

                    <StyledBox>
                        <Link to="/locations">
                            Locations
                        </Link>
                    </StyledBox>
                </Flex>
            </Flex>
            <Flex>
                {children}
            </Flex>
        </>
    );
};

export default Container;
