import img6 from '../data/projects/im6.jpeg';
import img7 from '../data/projects/im7.jpeg';
import img8 from '../data/projects/im8.jpeg';


export const projects = [
  {
    id: '1',
    name: 'Web-Based Dental Management System',
    description: 'Developed a full-stack dental management system to streamline clinic operations, including patient records, appointments, billing, and inventory. Implemented secure authentication, role-based access control, and responsive UI for multiple user roles.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'HTML', 'CSS', 'Thymeleaf', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/IT24102276/SmileDentalFinal',
    liveUrl: null,
    image: img6,
    category: 'Featured',
    MyRole: 'Responsible for developing and managing the Dentist Module Management, including frontend and backend development, CRUD operations, secure access control, and database integration.',
  },
  {
    id: '2',
    name: 'Restaurant Table Reservation System',
    description: 'Implemented queue-based data structure to manage reservation order using FCFS logic. Integrated DSA-based backend processing for efficient table allocation.',
    technologies: ['Java', 'JSP', 'Servlets', 'MySQL', 'DSA'],
    githubUrl: '',
    liveUrl: null,
    image: img7,
    category: 'Recent',
    MyRole: 'Queue Management',
  },
  {
    id: '3',
    name: 'MERN Stack To-Do List Application',
    description: 'Developed a responsive task management web application that allows CRUD operations. Built with a clean and intuitive UI, the project demonstrates strong frontend development skills.',
    technologies: ['MongoDB/Firebase', 'Express.js', 'React.js', 'Node.js', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Nithurshan11/ToDoList1',
    liveUrl: null,
    image: img8,
    category: 'Personal',
    MyRole: 'Full Stack Development',
  },
]
