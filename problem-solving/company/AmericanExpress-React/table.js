import React, { useState, useEffect } from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table() {
  const [uesrs, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchUserDetails(currentPage);
  }, []);

  const fetchUserDetails = async (pageNumber) => {
    setLoading(true);
    const res = await fetch(`https://example.com/api/users?page=${pageNumber}`);
    const data = await res.json();
    // console.log(data)
    setUsers(data.results);
    setNumberOfUsers(data.count);
    setLoading(false);
    // console.log(Math.floor(data.count / 10) - 1)
    setNumberOfPages(Math.floor(data.count / 10));
    console.log(currentPage);
  };
  const handleFirst = () => {
    setCurrentPage(0);
    fetchUserDetails(0);
  };
  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    fetchUserDetails(currentPage + 1);
  };
  const handleLastPage = () => {
    // const lastPage =
    // console.log("hello")
    setCurrentPage(numberOfPages);
    fetchUserDetails(numberOfPages);
  };
  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    fetchUserDetails(currentPage - 1);
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {uesrs.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className='pagination'>
        <button
          className='first-page-btn'
          disabled={isLoading || currentPage === 0}
          onClick={handleFirst}
        >
          first
        </button>
        <button
          className='previous-page-btn'
          disabled={isLoading || currentPage === 0}
          onClick={handlePreviousPage}
        >
          previous
        </button>
        <button
          className='next-page-btn'
          disabled={isLoading || currentPage === numberOfPages}
          onClick={handleNextPage}
        >
          next
        </button>
        <button
          className='last-page-btn'
          disabled={isLoading || currentPage === numberOfPages}
          onClick={handleLastPage}
        >
          last
        </button>
      </section>
    </div>
  );
}
