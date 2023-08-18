import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Box>
      <ButtonGroup>
        <Button
          onClick={handlePrevPage}
          disabled={isFirstPage}
          leftIcon={<FaChevronLeft />}
        >
          Previous
        </Button>
        <Text>{`${currentPage} of ${totalPages}`}</Text>
        <Button
          onClick={handleNextPage}
          disabled={isLastPage}
          rightIcon={<FaChevronRight />}
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;