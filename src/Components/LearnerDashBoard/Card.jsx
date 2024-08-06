import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
const [assignments, setAssignments] = useState([]);

useEffect(() => {
const fetchAssignments = async () => {
try {
const response = await axios.get('http://localhost:8080/api/assignments', {
headers: {
'Authorization': `${localStorage.getItem('token')}`
}
});
setAssignments(response.data);
} catch (error) {
console.error('Error fetching assignments:', error);
}
};

fetchAssignments();
}, []);

return (
<div id="card-container">
{assignments.map((assignment) => (
<div key={assignment.id} className="card">
<h3>{assignment.title}</h3>
<p>{assignment.description}</p>
</div>
))}
</div>
);
};

export default Cards;