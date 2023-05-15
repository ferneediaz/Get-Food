import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;

  const displayPage = sortedProducts.length
    ? sortedProducts.slice(visitedPage, visitedPage + productPerPage)
    : searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(
    (sortedProducts.length ? sortedProducts : searchedProduct).length /
      productPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSort = (e) => {
    const selectedOption = e.target.value;
    let sortedData = [];

    if (selectedOption === "ascending") {
      sortedData = searchedProduct.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (selectedOption === "descending") {
      sortedData = searchedProduct.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (selectedOption === "high-price") {
      sortedData = searchedProduct.sort((a, b) => b.price - a.price);
    } else if (selectedOption === "low-price") {
      sortedData = searchedProduct.sort((a, b) => a.price - b.price);
    } else {
      sortedData = [];
    }

    setPageNumber(0);
    setSortedProducts(sortedData);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" onChange={handleSort}>
                  <option value="">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
