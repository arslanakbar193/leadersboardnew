import React, { useState } from 'react';
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";

const TotalDashboard = ({ data }) => {
  // Toggle state for the columns (totalCalls, totalViewings, totalListings)
  const [toggleStates, setToggleStates] = useState({
    totalDeals:false,
    totalCalls: false,
    totalViewings: false,
    totalListings: false,
  });

  // Handle toggle for each column in the thead
  const handleToggle = (field) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // Toggle the specific column
    }));
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this value based on your requirement

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='table-layout'>
      <table className="total-table">
        <thead>
          <tr>
            <th>Agent Name</th>
            <th>Total Deals
            <div style={{ position: 'absolute', top: '11px',right:"10px" }}>
                {toggleStates.totalDeals ? (
                  <MdOutlineToggleOn
                    style={{ fontSize: '32px', color: "#1f7bc1", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalDeals')}
                  />
                ) : (
                  <MdOutlineToggleOff
                    style={{ fontSize: '32px', color: "#000", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalDeals')}
                  />
                )}
              </div>
            </th>

            {/* Total Calls with Toggle */}
            <th>
              Total Calls
              <div style={{ position: 'absolute', top: '11px',right:"10px"  }}>
                {toggleStates.totalCalls ? (
                  <MdOutlineToggleOn
                    style={{ fontSize: '32px', color: "#1f7bc1", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalCalls')}
                  />
                ) : (
                  <MdOutlineToggleOff
                    style={{ fontSize: '32px', color: "#000", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalCalls')}
                  />
                )}
              </div>
            </th>

            {/* Total Viewings with Toggle */}
            <th>
              Total Viewings
              <div style={{ position: 'absolute', top: '11px',right:"10px"  }}>
                {toggleStates.totalViewings ? (
                  <MdOutlineToggleOn
                    style={{ fontSize: '32px', color: "#1f7bc1", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalViewings')}
                  />
                ) : (
                  <MdOutlineToggleOff
                    style={{ fontSize: '32px', color: "#000", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalViewings')}
                  />
                )}
              </div>
            </th>

            {/* Total Listings with Toggle */}
            <th>
              Total Listings
              <div style={{ position: 'absolute', top: '11px',right:"10px"  }}>
                {toggleStates.totalListings ? (
                  <MdOutlineToggleOn
                    style={{ fontSize: '32px', color: "#1f7bc1", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalListings')}
                  />
                ) : (
                  <MdOutlineToggleOff
                    style={{ fontSize: '32px', color: "#000", cursor: 'pointer' }}
                    onClick={() => handleToggle('totalListings')}
                  />
                )}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.totalDeals}</td>
              <td>{agent.totalCalls}</td>
              <td>{agent.totalViewings}</td>
              <td>{agent.totalListings}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#10094; {/* Left arrow */}
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage} // Disable button if it's the current page
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default TotalDashboard;
