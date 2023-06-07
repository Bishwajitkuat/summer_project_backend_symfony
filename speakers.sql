-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: summerProjectDB:3306
-- Generation Time: Jun 06, 2023 at 11:08 AM
-- Server version: 8.0.33
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `summerProjectDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `speakers`
--

CREATE TABLE `speakers` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `speakers`
--

INSERT INTO `speakers` (`id`, `name`, `image`, `organizations`, `role`, `location`, `description`, `email`, `phone`, `linkedin`, `twitter`, `facebook`, `created_at`, `updated_at`) VALUES
(6, 'John Smith', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a:1:{i:0;O:8:\"stdClass\":10:{s:2:\"id\";i:9;s:4:\"name\";s:15:\"ABC Corporation\";s:5:\"image\";s:111:\"https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\";s:9:\"locatiion\";s:6:\"test 1\";s:11:\"description\";s:301:\"ABC Corporation is a leading global company specializing in technology solutions. We provide innovative software and hardware products to businesses across various industries. With a focus on quality and customer satisfaction, we strive to deliver cutting-edge solutions that drive growth and success.\";s:5:\"email\";s:16:\"info@abccorp.com\";s:5:\"phone\";s:15:\"+1 555-123-4567\";s:10:\"created_at\";O:8:\"stdClass\":3:{s:4:\"date\";s:26:\"2023-06-06 09:54:04.000000\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:15:\"Europe/Helsinki\";}s:10:\"updated_at\";N;s:7:\"address\";s:30:\"123 Main Street, City, Country\";}}', 'Senior Marketing Manager', '23 Main Street, City, Country', 'John Smith is an experienced marketing professional with a proven track record of driving successful campaigns. With expertise in digital marketing strategies and brand development, he helps businesses build their online presence and reach their target audience effectively.', 'john.smith@example.com', '+1 555-123-4567', 'https://www.linkedin.com/in/johnsmith', '@johnsmith', 'https://www.facebook.com/johnsmith', '2023-06-06 10:10:03', '2023-06-06 10:10:58'),
(7, 'Sarah Johnson', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a:1:{i:0;O:8:\"stdClass\":10:{s:2:\"id\";i:10;s:4:\"name\";s:15:\"XYZ Enterprises\";s:5:\"image\";s:111:\"https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\";s:9:\"locatiion\";s:6:\"test 1\";s:11:\"description\";s:324:\"XYZ Enterprises is a trusted provider of consulting services, helping businesses optimize their operations and achieve strategic goals. Our team of experts offers tailored solutions in areas such as finance, marketing, and human resources. We are committed to delivering value and driving sustainable growth for our clients.\";s:5:\"email\";s:26:\"contact@xyzenterprises.com\";s:5:\"phone\";s:15:\"+1 555-987-6543\";s:10:\"created_at\";O:8:\"stdClass\":3:{s:4:\"date\";s:26:\"2023-06-06 09:56:22.000000\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:15:\"Europe/Helsinki\";}s:10:\"updated_at\";N;s:7:\"address\";s:30:\" 456 Elm Avenue, City, Country\";}}', 'Chief Financial Officer', '456 Elm Avenue, City, Country', 'Sarah Johnson is a highly skilled financial executive with expertise in financial planning, budgeting, and risk management. With a strategic approach and in-depth market knowledge, she helps organizations achieve financial stability and growth.', 'sarah.johnson@example.com', '+1 555-987-6543', 'https://www.linkedin.com/in/sarahjohnson', ' @sarahjohnson', 'https://www.facebook.com/sarahjohnson', '2023-06-06 10:14:24', NULL),
(8, 'Robert Davis', 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a:1:{i:0;O:8:\"stdClass\":10:{s:2:\"id\";i:11;s:4:\"name\";s:14:\"QRS Industries\";s:5:\"image\";s:64:\"https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg\";s:9:\"locatiion\";s:6:\"test 1\";s:11:\"description\";s:327:\"QRS Industries is a renowned manufacturing company specializing in high-quality products for the automotive industry. With a focus on innovation and precision engineering, we consistently deliver superior performance and reliability. Our commitment to excellence has earned us a reputation as a trusted partner in the industry.\";s:5:\"email\";s:23:\"sales@qrsindustries.com\";s:5:\"phone\";s:15:\"+1 555-789-0123\";s:10:\"created_at\";O:8:\"stdClass\":3:{s:4:\"date\";s:26:\"2023-06-06 09:58:15.000000\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:15:\"Europe/Helsinki\";}s:10:\"updated_at\";N;s:7:\"address\";s:29:\"789 Oak Street, City, Country\";}}', 'Chief Technology Officer', '789 Oak Road, City, Country', 'Robert Davis is a technology visionary with extensive experience in driving innovation and managing complex IT projects. He specializes in leveraging cutting-edge technologies to transform businesses and enhance operational efficiency.', 'robert.davis@example.com', '+1 555-246-8109', 'https://www.linkedin.com/in/robertdavis', '@robertdavis', 'https://www.facebook.com/robertdavis', '2023-06-06 10:17:05', NULL),
(9, ' Emily Thompson', 'https://images.pexels.com/photos/12470243/pexels-photo-12470243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a:1:{i:0;O:8:\"stdClass\":10:{s:2:\"id\";i:12;s:4:\"name\";s:13:\"PQR Solutions\";s:5:\"image\";s:111:\"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\";s:9:\"locatiion\";s:6:\"test 1\";s:11:\"description\";s:378:\" PQR Solutions is a leading provider of comprehensive IT solutions for businesses. We offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. With a focus on delivering innovative and reliable solutions, we help our clients leverage technology to drive their digital transformation and achieve their business objectives.\";s:5:\"email\";s:21:\"info@pqrsolutions.com\";s:5:\"phone\";s:15:\"+1 555-246-1357\";s:10:\"created_at\";O:8:\"stdClass\":3:{s:4:\"date\";s:26:\"2023-06-06 10:02:00.000000\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:15:\"Europe/Helsinki\";}s:10:\"updated_at\";N;s:7:\"address\";s:29:\"987 Maple Lane, City, Country\";}}', 'Lead Software Engineer', '987 Maple Lane, City, Country', 'Emily Thompson is a highly skilled software engineer with expertise in full-stack development and system architecture. With a passion for creating robust and scalable solutions, she drives technological innovation and helps businesses achieve their software development goals.', 'emily.thompson@example.com', '+1 555-864-2098', 'https://www.linkedin.com/in/emilythompson', '@emilythompson', 'https://www.facebook.com/emilythompson', '2023-06-06 10:20:41', '2023-06-06 10:23:24'),
(10, 'Michael Johnson', 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a:1:{i:0;O:8:\"stdClass\":10:{s:2:\"id\";i:10;s:4:\"name\";s:15:\"XYZ Enterprises\";s:5:\"image\";s:111:\"https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\";s:9:\"locatiion\";s:6:\"test 1\";s:11:\"description\";s:324:\"XYZ Enterprises is a trusted provider of consulting services, helping businesses optimize their operations and achieve strategic goals. Our team of experts offers tailored solutions in areas such as finance, marketing, and human resources. We are committed to delivering value and driving sustainable growth for our clients.\";s:5:\"email\";s:26:\"contact@xyzenterprises.com\";s:5:\"phone\";s:15:\"+1 555-987-6543\";s:10:\"created_at\";O:8:\"stdClass\":3:{s:4:\"date\";s:26:\"2023-06-06 09:56:22.000000\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:15:\"Europe/Helsinki\";}s:10:\"updated_at\";N;s:7:\"address\";s:30:\" 456 Elm Avenue, City, Country\";}}', 'Executive Director', '654 Cedar Avenue, City, Country', 'Michael Johnson is a passionate advocate for education and community development. As the Executive Director of XYZ Enterprises, he leads initiatives that provide educational resources, scholarships, and mentorship programs to empower students and foster positive change.', 'michael.johnson@example.com', '+1 555-732-5910', 'https://www.linkedin.com/in/michaeljohnson', '@michaeljohnson', 'https://www.facebook.com/michaeljohnson', '2023-06-06 10:25:10', '2023-06-06 10:25:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `speakers`
--
ALTER TABLE `speakers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `speakers`
--
ALTER TABLE `speakers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
